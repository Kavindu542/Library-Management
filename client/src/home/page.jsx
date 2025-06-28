import Navbar from "./components/navbar"
import Hero from "./components/hero"
import CourseCategories from "./components/courseCategories"
import FeaturedCourses from "./components/featuredCourses"
import Footer from "./components/footer"
import "./styles/global.css"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CourseCategories />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  )
}

