import React, { useState } from "react";
import "./Membership.css";
import { Check } from "lucide-react";
import Payment from "../components/Payment";

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleJoinNow = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setSelectedPlan(null);
    // You can add additional logic here, like showing a success message
    alert("Payment successful! Welcome to FIT FUSSION!");
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    // You can add additional logic here, like showing an error message
  };

  return (
    <div className="membership-container">
      {/* Hero Section */}
      <div className="membership-hero">
        <h1>Fit Fussion Memberships</h1>
        <p>Transform Your Life with Our Premium Plans</p>
      </div>

      {/* Plans Section */}
      <section className="membership-section">
        <div className="section-content">
          <h2>Choose Your Plan</h2>
          <div className="plans-grid">
            {/* Basic Plan */}
            <div className="plan-card">
              <div className="plan-image">
                <img src="basic.jpeg" alt="Basic Plan" />
              </div>
              <div className="plan-details">
                <h3>Basic Plan</h3>
                <p className="price">
                  Rs3499<span>/3month</span>
                </p>
                <ul>
                <li>Equipment</li>
                  <li>All Days Free Training</li>
                  <li>Free Restroom</li>
                  <li>24/7 Skilled Support</li>
                  <li>20 Days Freezing Support</li>
                </ul>
                <button 
                  className="join-button"
                  onClick={() => handleJoinNow({
                    name: "Basic Plan",
                    amount: 3499,
                    duration: "3 months"
                  })}
                >
                  Join Now
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="plan-card featured">
              <div className="featured-tag">Most Popular</div>
              <div className="plan-image">
                <img src="premium.jpeg" alt="Premium Plan" />
              </div>
              <div className="plan-details">
                <h3>Premium Plan</h3>
                <p className="price">
                  Rs5999<span>/6month</span>
                </p>
                <ul>
                <li>Equipment</li>
                  <li>All Days Free Training</li>
                  <li>Free Restroom</li>
                  <li>24/7 Skilled Support</li>
                  <li>20 Days Freezing Support</li>
                </ul>
                <button 
                  className="join-button"
                  onClick={() => handleJoinNow({
                    name: "Premium Plan",
                    amount: 5999,
                    duration: "6 months"
                  })}
                >
                  Join Now
                </button>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="plan-card">
              <div className="plan-image">
                <img src="elite.jpeg" alt="Elite Plan" />
              </div>
              <div className="plan-details">
                <h3>Elite Plan</h3>
                <p className="price">
                  Rs9999<span>/1Year</span>
                </p>
                <ul>
                  <li>Equipment</li>
                  <li>All Days Free Training</li>
                  <li>Free Restroom</li>
                  <li>24/7 Skilled Support</li>
                  <li>20 Days Freezing Support</li>
                </ul>
                <button 
                  className="join-button"
                  onClick={() => handleJoinNow({
                    name: "Elite Plan",
                    amount: 9999,
                    duration: "1 Year"
                  })}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="membership-section benefits-section">
        <div className="section-content">
          <h2>Membership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-image">
                <img
                  src="State-of-the-art Equipment.jpeg"
                  alt="Modern Equipment"
                />
              </div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art fitness equipment for optimal results</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-image">
                <img src="gymMemeber.jpeg" alt="Expert Trainers" />
              </div>
              <h3>Expert Trainers</h3>
              <p>Professional guidance from certified fitness experts</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-image">
                <img src="yoga session.jpeg" alt="Group Classes" />
              </div>
              <h3>Group Classes</h3>
              <p>Diverse range of energizing group fitness sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <div className="payment-modal">
          <div className="payment-modal-content">
            <h2>Complete Your {selectedPlan.name} Purchase</h2>
            <p>Amount: Rs{selectedPlan.amount} for {selectedPlan.duration}</p>
            <Payment 
              amount={selectedPlan.amount} 
              membershipType={selectedPlan.name}
              userId="user123" // You can replace this with actual user ID when you have authentication
              onSuccess={handlePaymentComplete}
              onError={handlePaymentError}
            />
            <button 
              className="cancel-button"
              onClick={() => setShowPayment(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;
