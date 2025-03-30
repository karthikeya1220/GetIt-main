"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Course } from "./course-data"
import { useToast } from "@/components/ui/use-toast"

interface CartItem extends Course {
  quantity: number
}

interface CourseCartContextType {
  cartItems: CartItem[]
  addToCart: (course: Course) => void
  removeFromCart: (courseId: string) => void
  clearCart: () => void
  isInCart: (courseId: string) => boolean
  cartCount: number
  cartTotal: number
  isCartOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
}

const CourseCartContext = createContext<CourseCartContextType | undefined>(undefined)

export function CourseCartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { toast } = useToast()

  // Calculate cart count and total
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0)

  // Check if a course is already in the cart
  const isInCart = (courseId: string) => {
    return cartItems.some((item) => item.id === courseId)
  }

  // Add a course to the cart
  const addToCart = (course: Course) => {
    if (isInCart(course.id)) {
      return
    }

    setCartItems((prev) => [...prev, { ...course, quantity: 1 }])
    setIsCartOpen(true)

    toast({
      title: "Added to cart",
      description: `${course.title} has been added to your cart.`,
      duration: 3000,
    })
  }

  // Remove a course from the cart
  const removeFromCart = (courseId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId))

    toast({
      title: "Removed from cart",
      description: "The course has been removed from your cart.",
      duration: 3000,
    })
  }

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([])
  }

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("courseCart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("courseCart", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CourseCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CourseCartContext.Provider>
  )
}

export function useCourseCart() {
  const context = useContext(CourseCartContext)
  if (context === undefined) {
    throw new Error("useCourseCart must be used within a CourseCartProvider")
  }
  return context
}

