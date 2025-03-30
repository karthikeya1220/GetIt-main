"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, Users, Star, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCourseCart } from "./course-cart-context"
import type { Course } from "./course-data"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const { addToCart, isInCart, removeFromCart } = useCourseCart()
  const [isHovered, setIsHovered] = useState(false)

  const inCart = isInCart(course.id)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>
        {course.bestSeller && (
          <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>
        )}
        {course.discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            {course.discount}% OFF
          </Badge>
        )}
      </div>

      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-2">{course.title}</h3>
          <div className="flex items-center text-yellow-500 ml-2 whitespace-nowrap">
            <Star className="fill-yellow-500 h-4 w-4" />
            <span className="ml-1 text-sm font-medium">{course.rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {course.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{course.level}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="font-bold text-lg">${course.currentPrice}</span>
              {course.originalPrice > course.currentPrice && (
                <span className="text-muted-foreground line-through ml-2">${course.originalPrice}</span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">{course.access}</div>
          </div>

          {inCart ? (
            <Button
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => removeFromCart(course.id)}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button className="w-full" onClick={() => addToCart(course)}>
              Add to Cart
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

