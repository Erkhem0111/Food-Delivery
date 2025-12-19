"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StepContext } from "../page";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const formSchema = z
  .object({
    password: z.string().min(6),
    //   .regex(
    //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //     "Weak password. Use numbers and symbols."
    //   ),
    confirmPassword: z
      .string()
      .min(6, "Weak password. Use numbers and symbols."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Those password did’t match, Try again",
  });

type formSchemaType = z.infer<typeof formSchema>;

const Password = () => {
  const { data, handleNext, handleBack } = useContext(StepContext);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (values: formSchemaType) => {
    handleBack();
    handleNext();
  };
  return (
    <div>
      <Card className="w-126">
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
              <p className="text-[24px] leading-8 text-[#09090B] font-semibold pt-6">
                Create a strong password
              </p>
              <p className="text-[16px] leading-6 text-[#71717A] font-normal pt-1">
                Create a strong password with letters, numbers.
              </p>
              <div className="mt-6">
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-11"
                          placeholder="Confirm"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Checkbox />
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
        </CardContent>
        <CardFooter className="text-[16px] leading-4 font-normal flex gap-3 justify-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <Button variant="link" className="text-[#2563EB] cursor-pointer">
            Log in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Password;
