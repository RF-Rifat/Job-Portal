"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Navbar } from "../Navbar";
import { AuthButtons } from "./AuthButtons";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:opacity-90"
          >
            <Briefcase className="h-6 w-6 text-primary dark:text-white" />
            <span className="text-lg font-bold text-neutral-900 dark:text-white">
              Oneline Jobs
            </span>
          </Link>
          {/* Navbar */}
          <Navbar />
          {/* Authentication Buttons */}
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
