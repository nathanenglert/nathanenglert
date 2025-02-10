import React from "react";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <Layout>
      <Seo location="/contact" />
      <h1 className="text-2xl font-brand leading-12 cyber-h after:bg-accent">
        Contact
      </h1>
      <div className="space-y-8 mt-4">
        <p>
          Have a question or just want to say hi? If you'd like to get in touch,
          please use the form below.
        </p>
        <form name="contact" className="space-y-8" data-netlify="true">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Jane" name="name" required />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="jane@example.com" name="email" required />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Hey, I love your site..."
                name="message"
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <Button type="submit" className="cursor-pointer">
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
