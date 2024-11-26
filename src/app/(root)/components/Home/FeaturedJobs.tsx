import { Button } from '@/components/ui/button'

const jobs = [
  {
    title: 'Financial Analyst',
    company: 'CodeBase',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$70k - $90k'
  },
  {
    title: 'Frontend Web Developer',
    company: 'TechSpace',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90k - $120k'
  },
  {
    title: 'Digital Marketing Coordinator',
    company: 'Creative Studio',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$55k - $75k'
  },
  {
    title: 'Technical Writer',
    company: 'System Studio',
    location: 'Seattle, WA',
    type: 'Contract',
    salary: '$60k - $80k'
  }
]

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark mb-8">
          Featured Job Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-background-dark p-6 rounded-lg shadow-light dark:shadow-dark"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg mb-4" />
              <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-2">
                {job.title}
              </h3>
              <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark mb-4">
                {job.company}
              </p>
              <div className="space-y-2">
                <p className="text-caption text-textSecondary-light dark:text-textSecondary-dark">
                  {job.location}
                </p>
                <p className="text-caption text-textSecondary-light dark:text-textSecondary-dark">
                  {job.type}
                </p>
                <p className="text-bodySmall text-primary dark:text-primary-dark">
                  {job.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}

