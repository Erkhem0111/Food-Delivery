"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Snowfall from "react-snowfall";

const formSchema = z.object({
  email: z.string().email("Invalid email. Use a format like example@email.com"),
  password: z
    .string()
    .min(6)
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Weak password. Use numbers and symbols."
    ),
});

type formSchemaType = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: formSchemaType) => {};
  return (
    <div className="flex items-center justify-between h-screen px-22 gap-52 border-4 border-red-400">
      <Snowfall color="red" snowflakeCount={400} />
      <Card className="w-screen max-w-md">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Button
                variant="outline"
                className="w-9 h-9 cursor-pointer"
                type="submit"
              >
                <ChevronLeft />
              </Button>
              <p className="text-[24px] leading-8 text-[#09090B] font-semibold mt-6">
                Log in
              </p>
              <p className="text-[16px] leading-6 text-[#71717A] font-normal mt-1">
                Log in to enjoy your favorite dishes.
              </p>
              <div className="mt-6">
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
                      <FormDescription></FormDescription>
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
                        <Input
                          className="h-11"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
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
                className="w-full h-9 flex items-center justify-center cursor-pointer bg-gray-300 mt-6"
                type="submit"
              >
                Let's Go
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-[16px] leading-4 font-normal flex gap-3 justify-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <Link href="/Signup">
            <Button variant="link" className="text-[#2563EB] cursor-pointer">
              Sign up
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <img src="/Frame.png" className="h-screen py-8 w-screen rounded-3xl" />
    </div>
  );
};
export default Login;
