import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-4">Job Portal</h3>
            <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">Innovative solutions for your business needs.</p>
          </div>
          <div>
            <h4 className="text-bodyLarge font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Home</Link></li>
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Features</Link></li>
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-bodyLarge font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-bodyLarge font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-4">Contact Us</h4>
            <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark mb-2">Email: info@JobPortal.com</p>
            <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark text-center">
          <p className="text-caption text-textSecondary-light dark:text-textSecondary-dark">&copy; 2023 Job Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

