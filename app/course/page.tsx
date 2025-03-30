import { CourseContainer } from "@/components/courses/course-container"
import { CourseHeader } from "@/components/courses/course-header"
import { CourseFilters } from "@/components/courses/course-filters"
import { CourseList } from "@/components/courses/course-list"
import { CourseCartProvider } from "@/components/courses/course-cart-context"
import { CourseCartSidebar } from "@/components/courses/course-cart-sidebar"

export default function CoursePage() {
  return (
    <CourseCartProvider>
      <div className="min-h-screen bg-background">
        <CourseHeader />
        <CourseContainer>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <CourseFilters />
            </div>
            <div className="lg:col-span-3">
              <CourseList />
            </div>
          </div>
        </CourseContainer>
        <CourseCartSidebar />
      </div>
    </CourseCartProvider>
  )
}

