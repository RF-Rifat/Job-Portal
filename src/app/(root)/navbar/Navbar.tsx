import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {/* Dropdown Menu: Resources */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
          Resources
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/faq" className="w-full">Job Title FAQ</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/jobboard" className="w-full">Jobboard</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Simple Links */}
      <Link 
        href="/messages" 
        className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        Messages
      </Link>
      <Link 
        href="/pricing" 
        className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        Pricing
      </Link>

      {/* Button: Find Jobs */}
      <Button variant="secondary" size="sm" asChild>
        <Link href="/jobs">Find Jobs</Link>
      </Button>

      {/* Dropdown Menu: Post a Job */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="gap-1 border bg-transparent text-primary hover:text-white">
            Post A Job
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/post-job" className="w-full">Post a New Job</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/manage-jobs" className="w-full">Manage Posted Jobs</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
