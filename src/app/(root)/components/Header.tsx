import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Briefcase, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="w-6 h-6 text-primary dark:text-primary-dark" />
              <span className="text-h3 font-bold text-textPrimary-light dark:text-textPrimary-dark">
                Jobpilot
              </span>
            </Link>
          </div>
            <nav className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-textSecondary-light dark:text-textSecondary-dark hover:text-primary">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/faq">Job Title FAQ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/jobboard">Jobboard</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/messages"
                className="text-textSecondary-light dark:text-textSecondary-dark hover:text-primary"
              >
                Messages
              </Link>
              <Link
                href="/pricing"
                className="text-textSecondary-light dark:text-textSecondary-dark hover:text-primary"
              >
                Pricing
              </Link>
              <Button variant="secondary" asChild>
                <Link href="/jobs">Jobs</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    Post A Job <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/post-job">Post a New Job</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/manage-jobs">Manage Posted Jobs</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="outline">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
