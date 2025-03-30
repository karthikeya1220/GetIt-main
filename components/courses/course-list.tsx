"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CourseCard } from "./course-card"
import { courses } from "./course-data"

export function CourseList() {
  const [sortOption, setSortOption] = useState("popular")

  // Sort courses based on selected option
  const sortedCourses = [...courses].sort((a, b) => {
    switch (sortOption) {
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "newest":
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      case "price-low":
        return a.currentPrice - b.currentPrice
      case "price-high":
        return b.currentPrice - a.currentPrice
      default:
        return 0
    }
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Showing {courses.length} courses</h2>
        <div className="flex items-center">
          <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

