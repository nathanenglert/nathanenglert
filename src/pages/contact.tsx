import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
        <form
          name="contact"
          method="POST"
          className="space-y-8"
          data-netlify="true"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input placeholder="Jane" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="jane@example.com" name="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Hey, I love your site..."
              name="message"
              required
            />
          </div>
          <Button type="submit" className="cursor-pointer">
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
