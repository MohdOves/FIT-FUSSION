import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Elite Edge Fitness</h1>
        <p>Where Fitness Meets Excellence</p>
      </div>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2000, Elite Edge Fitness has been dedicated to transforming lives 
            through fitness and wellness. What started as a small local gym has grown into 
            a community of passionate fitness enthusiasts and dedicated professionals.
          </p>
          <div className="image-placeholder">
            <img src="images.jpeg" alt="gym Member" />
            
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="about-section values-section">
        <div className="section-content">
          <h2>Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from our equipment to our training programs.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>Building a supportive and motivating environment for all our members.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly evolving and incorporating the latest fitness trends and technology.</p>
            </div>
            <div className="value-card">
              <h3>Results</h3>
              <p>Committed to helping our members achieve their fitness goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <div className="section-content">
          <h2>Our Expert Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="john.jpeg" alt="" />
                <p>Team Member Image</p>
              </div>
              <h3>John Doe</h3>
              <p>Head Trainer</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="jahn.jpeg" alt="" />
                <p>Team Member Image</p>
              </div>
              <h3>Jane Smith</h3>
              <p>Nutrition Specialist</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="about-section facilities-section">
        <div className="section-content">
          <h2>Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility">
              <div className="facility-image">
                <img src="State-of-the-art Equipment.jpeg" alt="State-of-the-art Equipment" />
                <p>Facility Image</p>
              </div>
              <h3>State-of-the-art Equipment</h3>
            </div>
            <div className="facility">
              <div className="facility-image">
                <img src="cardio.jpeg" alt="Cardio Zone" />
                <p>Facility Image</p>
              </div>
              <h3>Cardio Zone</h3>
            </div>
            <div className="facility">
              <div className="facility-image">
                <img src="personalarea.jpeg" alt="Personal Training Area" />
                <p>Facility Image</p>
              </div>
              <h3>Personal Training Area</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
