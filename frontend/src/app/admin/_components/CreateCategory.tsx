"use client";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const categoryFormSchema = z.object({
  categoryName: z.string().min(2, {
    message: "Food name must be at least 2 characters.",
  }),
});

type CategoryFormValues = z.infer<typeof categoryFormSchema>;

type Category = {
  _id: string;
  name: string;
};
export const CreateCategory = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const onSubmit = async (values: CategoryFormValues) => {
    await api.post("/categories", {
      name: values.categoryName,
    });
    form.reset();
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-9 h-9 shadow-lg p-3 rounded-full cursor-pointer"
        >
          <Plus className="stroke-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-150">
        <DialogHeader className="pb-6">
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1"
                      placeholder="Type category name..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="cursor-pointer mt-12">
                Add Dish
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
