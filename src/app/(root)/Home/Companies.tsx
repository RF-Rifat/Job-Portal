const companies = [
  {
    name: 'CodeBase',
    description: 'Leading software development company specializing in innovative solutions.',
    employees: '1000+',
    rating: '4.8'
  },
  {
    name: 'TechSpace',
    description: 'Technology consulting and digital transformation services.',
    employees: '500+',
    rating: '4.6'
  },
  {
    name: 'Creative Studio',
    description: 'Digital design and creative services for modern businesses.',
    employees: '100+',
    rating: '4.9'
  },
  {
    name: 'System Studio',
    description: 'Enterprise software solutions and system integration.',
    employees: '250+',
    rating: '4.7'
  }
]

export default function Companies() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-textPrimary-light dark:text-textPrimary-dark mb-8">
          Find Best Companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-light dark:shadow-dark"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary-dark/10 rounded-lg mb-4" />
              <h3 className="text-h3 text-textPrimary-light dark:text-textPrimary-dark mb-2">
                {company.name}
              </h3>
              <p className="text-bodySmall text-textSecondary-light dark:text-textSecondary-dark mb-4">
                {company.description}
              </p>
              <div className="flex justify-between">
                <span className="text-caption text-textSecondary-light dark:text-textSecondary-dark">
                  {company.employees} employees
                </span>
                <span className="text-caption text-primary dark:text-primary-dark">
                  ★ {company.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

