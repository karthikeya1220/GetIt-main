export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  image: string
  rating: number
  reviews: number
  students: number
  duration: string
  lessons: number
  level: string
  tags: string[]
  currentPrice: number
  originalPrice: number
  discount: number
  bestSeller: boolean
  access: string
  publishedDate: string
}

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Complete Web Development Bootcamp 2023",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB and more! Build real-world projects and become a full-stack developer.",
    instructor: "Dr. Angela Yu",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 45892,
    students: 215000,
    duration: "63 hours",
    lessons: 441,
    level: "Beginner to Advanced",
    tags: ["Web Development", "JavaScript", "React", "Node.js"],
    currentPrice: 89.99,
    originalPrice: 199.99,
    discount: 55,
    bestSeller: true,
    access: "Lifetime Access",
    publishedDate: "2023-01-15",
  },
  {
    id: "course-2",
    title: "Data Science and Machine Learning Bootcamp",
    description:
      "Learn Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, Machine Learning, Tensorflow, and more!",
    instructor: "Jose Portilla",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviews: 32456,
    students: 178000,
    duration: "42 hours",
    lessons: 165,
    level: "Intermediate",
    tags: ["Data Science", "Python", "Machine Learning", "AI"],
    currentPrice: 94.99,
    originalPrice: 189.99,
    discount: 50,
    bestSeller: true,
    access: "Lifetime Access",
    publishedDate: "2023-02-20",
  },
  {
    id: "course-3",
    title: "UI/UX Design Masterclass: Design Thinking in Practice",
    description:
      "Learn the complete UI/UX design process from research to final designs. Create wireframes, prototypes, and design systems.",
    instructor: "Sarah Williams",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 12789,
    students: 89000,
    duration: "38 hours",
    lessons: 210,
    level: "All Levels",
    tags: ["UI/UX Design", "Figma", "Design Thinking", "Prototyping"],
    currentPrice: 84.99,
    originalPrice: 169.99,
    discount: 50,
    bestSeller: false,
    access: "Lifetime Access",
    publishedDate: "2023-03-10",
  },
  {
    id: "course-4",
    title: "Digital Marketing Strategy: SEO, Social Media & More",
    description:
      "Master digital marketing strategy, social media marketing, SEO, YouTube, email, Facebook marketing, analytics & more!",
    instructor: "Mark Thompson",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    reviews: 18965,
    students: 125000,
    duration: "52 hours",
    lessons: 325,
    level: "Beginner",
    tags: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
    currentPrice: 79.99,
    originalPrice: 159.99,
    discount: 50,
    bestSeller: true,
    access: "Lifetime Access",
    publishedDate: "2023-04-05",
  },
  {
    id: "course-5",
    title: "Project Management Professional (PMP) Certification",
    description:
      "Pass the PMP exam on your first try! Learn the essential concepts, tools, and techniques for effective project management.",
    instructor: "Joseph Phillips",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviews: 9876,
    students: 65000,
    duration: "35 hours",
    lessons: 230,
    level: "Intermediate",
    tags: ["Project Management", "PMP", "Agile", "Scrum"],
    currentPrice: 99.99,
    originalPrice: 199.99,
    discount: 50,
    bestSeller: false,
    access: "Lifetime Access",
    publishedDate: "2023-01-25",
  },
  {
    id: "course-6",
    title: "Entrepreneurship: How to Start and Grow Your Business",
    description:
      "Learn how to validate your idea, create a business plan, secure funding, build a team, and scale your startup.",
    instructor: "Alex Chen",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 7654,
    students: 42000,
    duration: "28 hours",
    lessons: 185,
    level: "All Levels",
    tags: ["Entrepreneurship", "Business", "Startup", "Marketing"],
    currentPrice: 74.99,
    originalPrice: 149.99,
    discount: 50,
    bestSeller: false,
    access: "Lifetime Access",
    publishedDate: "2023-05-12",
  },
  {
    id: "course-7",
    title: "Advanced Communication Skills for Career Success",
    description:
      "Master public speaking, negotiation, conflict resolution, and interpersonal communication for professional growth.",
    instructor: "Jennifer Lawrence",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 5432,
    students: 38000,
    duration: "22 hours",
    lessons: 145,
    level: "All Levels",
    tags: ["Communication", "Public Speaking", "Negotiation", "Leadership"],
    currentPrice: 69.99,
    originalPrice: 139.99,
    discount: 50,
    bestSeller: false,
    access: "Lifetime Access",
    publishedDate: "2023-06-01",
  },
  {
    id: "course-8",
    title: "Financial Literacy: Personal Finance Management",
    description:
      "Learn how to budget, save, invest, manage debt, and plan for retirement to achieve financial freedom.",
    instructor: "Robert Kiyosaki",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviews: 8765,
    students: 56000,
    duration: "25 hours",
    lessons: 160,
    level: "Beginner",
    tags: ["Finance", "Investing", "Budgeting", "Retirement Planning"],
    currentPrice: 64.99,
    originalPrice: 129.99,
    discount: 50,
    bestSeller: false,
    access: "Lifetime Access",
    publishedDate: "2023-03-18",
  },
  {
    id: "course-9",
    title: "Artificial Intelligence and Deep Learning Specialization",
    description:
      "Master deep learning concepts and applications including neural networks, computer vision, NLP, and reinforcement learning.",
    instructor: "Andrew Ng",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 15678,
    students: 98000,
    duration: "55 hours",
    lessons: 320,
    level: "Advanced",
    tags: ["AI", "Deep Learning", "Neural Networks", "TensorFlow"],
    currentPrice: 109.99,
    originalPrice: 219.99,
    discount: 50,
    bestSeller: true,
    access: "Lifetime Access",
    publishedDate: "2023-02-10",
  },
]

