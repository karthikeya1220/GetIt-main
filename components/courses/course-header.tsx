import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Expand Your Skills with Expert-Led Courses</h1>
          <p className="text-lg mb-8 opacity-90">
            Discover courses taught by industry professionals and elevate your career prospects. Perfect for college
            students looking to stand out in the job market.
          </p>
          <div className="flex items-center max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search for courses..."
              className="pr-10 bg-background/90 border-0 focus-visible:ring-offset-primary"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Button variant="secondary" size="sm">
              Web Development
            </Button>
            <Button variant="secondary" size="sm">
              Data Science
            </Button>
            <Button variant="secondary" size="sm">
              UI/UX Design
            </Button>
            <Button variant="secondary" size="sm">
              Marketing
            </Button>
            <Button variant="secondary" size="sm">
              Business
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

