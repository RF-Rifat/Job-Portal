import { Button } from "@/components/ui/button"

export function AuthButtons() {

    const user = false

  return (
    <div className="flex items-center gap-2">
      {/* Sign In Button */}
      {
        user ? 
      <Button 
        variant="ghost" 
        size="sm"
        className="text-white hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white bg-primary"
      >
        Sign In
      </Button>
        :
      <Button 
        variant="outline" 
        size="sm"
        className="text-white hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white bg-primary"
      >
        Sign Up
      </Button>
      }
    </div>
  )
}
