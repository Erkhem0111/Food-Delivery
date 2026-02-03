"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
};

type User = {
  _id: string;
  email: string;
  role: string;
};
type LoginResponse = {
  user: User;
  accessToken: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("accessToken", data.accessToken);

      setUser(data.user);
      router.push(data.user.role === "admin" ? "/admin" : "/");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/Login");
  };

  const register = async (email: string, password: string) => {
    await api.post("/auth/register", {
      email,
      password,
    });
    router.push("/Login");
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    const fetchMe = async () => {
      try {
        const { data } = await api.get<{ user: User }>("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data.user);
      } catch {
        localStorage.removeItem("accessToken");
        setUser(null);
      }
    };

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
