import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className='sub-title'>
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/about')}>Start Your Journey</button>
          <button onClick={() => navigate('/membership')}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
