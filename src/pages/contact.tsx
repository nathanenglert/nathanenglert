import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircleIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Layout>
      <Seo location="/contact" />
      <h1 className="text-2xl font-brand leading-12 cyber-h after:bg-accent">
        Contact
      </h1>
      <div className="space-y-8 mt-4">
        <p>
          I'm always looking for new projects and collaborations. If you'd like
          to get in touch, please use the form below.
        </p>
        {isSuccess && (
          <Alert>
            <CheckCircleIcon className="h-4 w-4" />
            <AlertTitle>Got it!</AlertTitle>
            <AlertDescription>
              Thanks for reaching out, I'll get back to you as soon as possible.
            </AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form
            name="contact"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            data-netlify="true"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hey, I love your site..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="cursor-pointer">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default ContactPage;
