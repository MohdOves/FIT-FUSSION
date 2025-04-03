import React, { useState } from 'react';
import './Gallery.css';

const Galler = () => {
  const [filter, setFilter] = useState('all');

  
  const galleryItems = [
    {
      id: 1,
      category: 'gym',
      image: 'workoutarea.jpeg',
      title: 'Main Workout Area',
      description: 'State-of-the-art equipment'
    },
    {
      id: 2,
      category: 'classes',
      image: 'yoga session.jpeg',
      title: 'Yoga Session',
      description: 'Morning yoga class'
    },
    {
      id: 3,
      category: 'training',
      image: 'personalarea.jpeg',
      title: 'Personal Training',
      description: 'One-on-one training session'
    },
    
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-container">
      <div className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Experience Elite Edge Fitness Through Our Lens</p>
      </div>

      <div className="gallery-content">
        <div className="gallery-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'gym' ? 'active' : ''} 
            onClick={() => setFilter('gym')}
          >
            Gym
          </button>
          <button 
            className={filter === 'classes' ? 'active' : ''} 
            onClick={() => setFilter('classes')}
          >
            Classes
          </button>
          <button 
            className={filter === 'training' ? 'active' : ''} 
            onClick={() => setFilter('training')}
          >
            Training
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galler; 