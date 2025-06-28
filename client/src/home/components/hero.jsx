import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      {/* Background image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="container hero-content">
        <h1 className="hero-title">Empower Your Learning Journey</h1>
        <p className="hero-description">
          Access hundreds of expert-led courses, track your progress, and achieve your goals with our advanced Learning Management System.
        </p>
        <form className="hero-search">
          <input type="text" placeholder="Search for courses..." className="search-input" />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🎓</span>
            <span>10,000+ Students</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📚</span>
            <span>120+ Courses</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍🏫</span>
            <span>50+ Instructors</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⭐</span>
            <span>4.9/5 Avg. Rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}