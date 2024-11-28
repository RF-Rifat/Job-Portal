import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark mb-4">
          Stay Up to Date
        </h2>
        <p className="text-bodyLarge text-textSecondary-light dark:text-textSecondary-dark mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates about new job opportunities
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-input-light dark:bg-input-dark"
          />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}

