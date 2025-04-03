import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

 
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Workout Tips for Beginners",
      category: "fitness",
      date: "March 15, 2024",
      author: "John Doe",
      image: "tips.jpeg",
      excerpt: "Starting your fitness journey can be overwhelming. Here are 10 essential tips to help you get started on the right foot...",
      readTime: "5 min read",
      
      link: "https://havenlife.com/blog/fitness-tips-for-beginners/" // External link
    },
    {
      id: 2,
      title: "Nutrition Guide: Pre and Post Workout Meals",
      category: "nutrition",
      date: "March 12, 2024",
      author: "Jane Smith",
      image: "NutritionGuide.jpeg",
      excerpt: "What you eat before and after your workout is crucial for optimal performance and recovery...",
      readTime: "7 min read",
     
      link: "https://www.webmd.com/fitness-exercise/ss/slideshow-foods-for-workout" // External link
    },
    {
      id: 3,
      title: "Understanding Different Training Styles",
      category: "training",
      date: "March 10, 2024",
      author: "Mike Johnson",
      image: "difftrainStyle.jpeg",
      excerpt: "From HIIT to strength training, learn about different training styles and which one might be right for you...",
      readTime: "6 min read",
      
      link: "https://www.bodybuilding.com/fun/teen-james43.htm" // External link
    },
    
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1>Fitness Blog</h1>
        <p>Stay Updated with the Latest Fitness Tips and Trends</p>
      </div>

      <div className="blog-content">

        <div className="featured-post">
          <a href={blogPosts[0].link} target="_blank" rel="noopener noreferrer">
            <div className="featured-image">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
            </div>
          </a>
          <div className="featured-content">
            <span className="post-category">{blogPosts[0].category}</span>
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <div className="post-meta">
              <span>{blogPosts[0].date}</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <a href={blogPosts[0].link} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
          </div>
        </div>

        
        <div className="blog-filters">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All Posts
          </button>
          <button 
            className={activeCategory === 'fitness' ? 'active' : ''} 
            onClick={() => setActiveCategory('fitness')}
          >
            Fitness
          </button>
          <button 
            className={activeCategory === 'nutrition' ? 'active' : ''} 
            onClick={() => setActiveCategory('nutrition')}
          >
            Nutrition
          </button>
          <button 
            className={activeCategory === 'training' ? 'active' : ''} 
            onClick={() => setActiveCategory('training')}
          >
            Training
          </button>
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="post-category">{post.category}</span>
                </div>
              </a>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <div className="meta-left">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <div className="post-tags">
                 
                </div>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
