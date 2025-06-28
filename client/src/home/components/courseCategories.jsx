import "../styles/courseCategories.css"

export default function CourseCategories() {
  const categories = [
    {
      icon: "💻",
      title: "Programming",
      description: "Learn coding languages and development skills",
      count: "25+ Courses"
    },
    {
      icon: "📊",
      title: "Business",
      description: "Master business strategies and management",
      count: "18+ Courses"
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Explore creative design and visual arts",
      count: "15+ Courses"
    },
    {
      icon: "🔬",
      title: "Science",
      description: "Discover scientific concepts and research",
      count: "20+ Courses"
    }
  ]

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Explore Categories</h2>
        <p className="section-description">Browse through our diverse range of learning categories</p>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <span className="course-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 