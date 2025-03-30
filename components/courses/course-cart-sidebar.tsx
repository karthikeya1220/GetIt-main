"use client"

import { ShoppingCart, X, ChevronRight, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useCourseCart } from "./course-cart-context"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

export function CourseCartSidebar() {
  const { cartItems, removeFromCart, clearCart, cartCount, cartTotal, isCartOpen, setIsCartOpen } = useCourseCart()

  const { toast } = useToast()

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This would normally redirect to a payment gateway.",
      duration: 3000,
    })
  }

  return (
    <>
      {/* Cart toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart className="h-6 w-6" />
        {cartCount > 0 && (
          <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">
            {cartCount}
          </Badge>
        )}
      </Button>
      
      {/* Cart sidebar */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-background shadow-xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart header */}
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <h2 className="font-semibold text-lg">Your Cart ({cartCount})</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Cart content */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any courses to your cart yet.
              </p>
              <Button onClick={() => setIsCartOpen(false)}>
                Browse Courses
              </Button>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-grow">
                <div className="p-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image 
                          src={item.image || "/placeholder.svg"} 
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col flex-grow min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.instructor}</p>
                        <div className="flex items-center mt-auto">
                          <span className="font-bold">${item.currentPrice.toFixed(2)}</span>
                          {item.originalPrice > item.currentPrice && (
                            <span className="text-xs text-muted-foreground line-through ml-2">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 flex-shrink-0 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="border-t p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" onClick={handleCheckout}>
                    Checkout <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-muted-foreground"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

