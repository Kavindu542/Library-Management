import "../styles/featuredCourses.css"

export default function FeaturedCourses() {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1250,
      price: "$99.99",
      duration: "12 weeks"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 980,
      price: "$129.99",
      duration: "10 weeks"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "UI/UX Design Masterclass",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 850,
      price: "$89.99",
      duration: "8 weeks"
    }
  ]

  return (
    <section className="featured-courses">
      <div className="container">
        <h2 className="section-title">Featured Courses</h2>
        <p className="section-description">Discover our most popular courses taught by industry experts</p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-duration">{course.duration}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">By {course.instructor}</p>
                <div className="course-meta">
                  <div className="rating">
                    <span className="stars">{"★".repeat(Math.floor(course.rating))}</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>
                  <div className="students">{course.students} students</div>
                </div>
                <div className="course-footer">
                  <span className="price">{course.price}</span>
                  <button className="enroll-button">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 