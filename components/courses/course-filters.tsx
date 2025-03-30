"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CourseFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <div className="bg-card rounded-lg border p-4 sticky top-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["category", "level", "price", "duration"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Web Development",
                "Data Science",
                "UI/UX Design",
                "Digital Marketing",
                "Project Management",
                "Business",
                "Communication",
              ].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="level">
          <AccordionTrigger>Skill Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={`level-${level}`} />
                  <Label htmlFor={`level-${level}`}>{level}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 200]} max={200} step={5} onValueChange={setPriceRange} />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-free" />
                  <Label htmlFor="price-free">Free Courses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-discounted" />
                  <Label htmlFor="price-discounted">Discounted</Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger>Duration</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["0-2 hours", "3-6 hours", "7-16 hours", "17+ hours"].map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <Checkbox id={`duration-${duration}`} />
                  <Label htmlFor={`duration-${duration}`}>{duration}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full">
          Reset
        </Button>
      </div>
    </div>
  )
}

