"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Navbar } from "../Navbar";
import { AuthButtons } from "./AuthButtons";
import { Container } from "@/components/ui/container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:opacity-90"
          >
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">
              Oneline Jobs
            </span>
          </Link>
          {/* Navbar */}
          <Navbar />
          {/* Authentication Buttons */}
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
