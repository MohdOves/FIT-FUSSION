import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our expertly designed workout sessions that cater to all fitness levels. 
          Our comprehensive training programs combine strength training, cardiovascular conditioning, 
          and flexibility work to help you achieve your fitness goals.
        </p>
        <img src='/img5.jpg' alt='Professional trainer guiding a workout session'/>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Transform your body and mind with our high-intensity bootcamp programs. 
          These dynamic group sessions combine functional training, HIIT workouts, 
          and team motivation to push your limits and achieve breakthrough results. 
          
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Warriors Bootcamp</h4>
            <p>
              High-Intensity Interval Training designed to maximize calorie burn and improve 
              cardiovascular fitness. 45-minute sessions of explosive movements, strength training, 
              and metabolic conditioning.
            </p>
          </div>
          <div>
            <h4>Strength & Power Bootcamp</h4>
            <p>
              Focus on building lean muscle and increasing strength through compound movements, 
              progressive overload, and proper form techniques. Perfect for those looking to 
              enhance their physical performance.
            </p>
          </div>
          <div>
            <h4>Core & Conditioning Bootcamp</h4>
            <p>
              Specialized training targeting core strength, stability, and overall conditioning. 
              Incorporate medicine balls, resistance bands, and bodyweight exercises for a 
              complete core workout experience.
            </p>
          </div>
          <div>
            <h4>Total Body Transformation</h4>
            <p>
              Our signature bootcamp combining strength training, cardio intervals, and 
              nutritional guidance. This comprehensive program is designed for maximum fat loss 
              and muscle definition.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions
