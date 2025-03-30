import type React from "react"

interface CourseContainerProps {
  children: React.ReactNode
}

export function CourseContainer({ children }: CourseContainerProps) {
  return <div className="container mx-auto px-4 py-8">{children}</div>
}

