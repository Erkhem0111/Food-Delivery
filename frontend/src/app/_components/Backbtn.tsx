import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.email("error"),
});

type formSchemaType = z.infer<typeof formSchema>;

export const Backbtn = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (values: formSchemaType) => {
    [];
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <Button className="w-9 h-9">
            <ChevronLeft />
          </Button>
          <p className="text-[24px] leading-8 text-[#09090B] font-semibold"></p>
          <p className="text-[16px] leading-6 text-[#71717A] font-normal"></p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#334155]">
                      Date of birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11"
                        placeholder="@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
