"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Snowfall from "react-snowfall";
import { useAuth } from "../(client)/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email. Use a format like example@email.com"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one uppercase letter")
    .regex(/[0-9]/, "Must include at least one number")
    .regex(/[@$!%*?&#]/, "Must include at least one special character"),
});

type formType = z.infer<typeof formSchema>;

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: formType) => {
    setLoading(true);
    await login(values.email, values.password);
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-between h-screen px-20 gap-52 border-4 border-red-400">
      <Snowfall color="pink" snowflakeCount={200} />
      <Card className="w-full max-w-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Button
                variant="outline"
                className="w-9 h-9 cursor-pointer"
                type="button"
                onClick={() => router.back()}
              >
                <ChevronLeft />
              </Button>
              <p className="text-[24px] leading-8 text-[#09090B] font-semibold mt-6">
                Log in
              </p>
              <p className="text-[16px] leading-6 text-[#71717A] font-normal mt-1">
                Log in to enjoy your favorite dishes.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-11"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            className="h-11 pr-10"
                            placeholder="Password"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                          >
                            {showPassword ? (
                              <Eye className="w-4 h-4" />
                            ) : (
                              <EyeOff className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="text-[14px] leading-5 text-[#18181B] font-normal"
                variant="link"
              >
                Forgot password?
              </Button>
              <Button
                variant="outline"
                disabled={loading}
                className="w-full h-9 flex items-center justify-center cursor-pointer bg-gray-300 mt-6"
                type="submit"
              >
                {loading ? "Logging in..." : "Let's go"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-[16px] leading-4 font-normal flex gap-3 justify-center">
          <p className="text-[#71717A]">Don't have an account?</p>
          <Button
            variant="link"
            className="text-[#2563EB] cursor-pointer"
            onClick={() => router.push("/Signup")}
          >
            Sign up
          </Button>
        </CardFooter>
      </Card>
      <img
        src="/Frame.png"
        className="hidden md:block h-screen w-1/2 py-8 rounded-3xl"
      />
    </div>
  );
};
export default Login;
