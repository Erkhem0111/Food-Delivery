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
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Snowfall from "react-snowfall";
import { z } from "zod";
import { useAuth } from "../(client)/context/AuthProvider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const EmailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email. Use a format like example@email.com"),
});

const PasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[a-z]/, "Must include at least one uppercase letter")
      .regex(/[0-9]/, "Must include at least one number")
      .regex(/[@$!%*?&#]/, "Must include at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type EmailType = z.infer<typeof EmailSchema>;
type PasswordType = z.infer<typeof PasswordSchema>;

export default function Signup() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const emailForm = useForm<EmailType>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const PasswordForm = useForm<PasswordType>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onEmailSubmit = (data: EmailType) => {
    setEmail(data.email);
    setStep(2);
  };
  const onPasswordSubmit = async (data: PasswordType) => {
    await registerUser(email, data.password);
    router.push("/Login");
  };
  console.log("Email:", email);
  console.log("Password Form Data:", PasswordForm.getValues());

  return (
    <div className="flex items-center justify-between h-screen px-22 gap-52 border-4 border-red-400">
      <Snowfall color="pink" snowflakeCount={200} />
      <Card className="w-screen max-w-md">
        <CardContent>
          {step === 1 && (
            <Form {...emailForm}>
              <form onSubmit={emailForm.handleSubmit(onEmailSubmit)}>
                <Button
                  variant="outline"
                  className="w-9 h-9 cursor-pointer"
                  type="button"
                  onClick={() => router.back()}
                >
                  <ChevronLeft />
                </Button>
                <p className="text-[24px] leading-8 text-[#09090B] font-semibold mt-6">
                  Create your account
                </p>
                <p className="text-[16px] leading-6 text-[#71717A] font-normal mt-1">
                  Sign up to explore your favorite dishes.
                </p>
                <div className="mt-6">
                  <FormField
                    control={emailForm.control}
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
                </div>
                <Button
                  variant="outline"
                  className="w-full h-9 flex items-center justify-center cursor-pointer bg-gray-300 mt-6"
                  type="submit"
                >
                  Next
                </Button>
              </form>
            </Form>
          )}
          {step === 2 && (
            <Form {...PasswordForm}>
              <form onSubmit={PasswordForm.handleSubmit(onPasswordSubmit)}>
                <Button
                  variant="outline"
                  className="w-9 h-9 cursor-pointer"
                  type="button"
                  onClick={() => setStep(1)}
                >
                  <ChevronLeft />
                </Button>
                <p className="text-[24px] leading-8 text-[#09090B] font-semibold pt-6">
                  Create a strong password
                </p>
                <p className="text-[16px] leading-6 text-[#71717A] font-normal pt-1">
                  Create a strong password with letters, numbers.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <FormField
                    control={PasswordForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type={show ? "text" : "password"}
                            className="h-11"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={PasswordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type={show ? "text" : "password"}
                            className="h-11"
                            placeholder="Confirm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2 pt-4 text-[#71717A]">
                  <Checkbox onCheckedChange={(v) => setShow(!!v)} />
                  <Label>Show password</Label>
                </div>
                <Button
                  variant="outline"
                  className="w-full h-9 flex items-center justify-center cursor-pointer bg-gray-300 mt-6"
                  type="submit"
                >
                  Let's Go
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="text-[16px] leading-4 font-normal flex gap-3 justify-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <Button
            variant="link"
            className="text-[#2563EB] cursor-pointer"
            onClick={() => router.push("/Login")}
          >
            Log in
          </Button>
        </CardFooter>
      </Card>
      <img src="/Frame.png" className="h-screen py-8 w-screen rounded-3xl" />
    </div>
  );
}
