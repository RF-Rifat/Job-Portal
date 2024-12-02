'use client'

import * as React from 'react'
import { JobSeekerProfile } from '@/types/job-seeker'
import SearchBar from '@/components/search-bar'
import FilterAside from '@/components/filter-aside'
import ProfileGrid from '@/components/profile-grid'

const mockProfiles: JobSeekerProfile[] = [
  {
    photo: '/placeholder.svg',
    jobTitle: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    experienceLevel: 'Senior',
    hourlyPayInUSD: 45,
    locationPreference: 'Remote',
    education: {
      educationLevel: "Bachelor's Degree",
      fieldOfStudy: 'Computer Science'
    },
    profileCompletionPercentage: 85,
    additionalDetails: {
      lastActive: '1 week or less'
    }
  },
  // Add more mock profiles as needed
]

export default function JobSeekerSearch() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filters, setFilters] = React.useState({
    experienceLevel: '',
    locationPreference: '',
    skills: [] as string[]
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  // Apply filters and search to profiles
  const filteredProfiles = mockProfiles.filter(profile => {
    const matchesSearch = profile.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesExperience = !filters.experienceLevel || profile.experienceLevel === filters.experienceLevel
    const matchesLocation = !filters.locationPreference || profile.locationPreference === filters.locationPreference
    const matchesSkills = filters.skills.length === 0 || filters.skills.every(skill => profile.skills.includes(skill))
    return matchesSearch && matchesExperience && matchesLocation && matchesSkills
  })

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-64">
        <FilterAside filters={filters} onFilterChange={handleFilterChange} />
      </aside>
      <div className="flex-1">
        <SearchBar onSearch={handleSearch} />
        <ProfileGrid profiles={filteredProfiles} />
      </div>
    </div>
  )
}

