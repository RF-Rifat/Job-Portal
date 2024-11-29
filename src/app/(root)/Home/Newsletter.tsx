"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16">
      <Container>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>
              <H2 className="flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Stay Updated
              </H2>
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              <Paragraph>
                Subscribe to our newsletter for the latest job opportunities and
                career insights.
              </Paragraph>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-primary flex-grow"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
