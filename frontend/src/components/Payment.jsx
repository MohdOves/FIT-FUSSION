import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ amount, membershipType, userId, onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Initiating payment for:', { amount, membershipType, userId });
      console.log('API URL:', import.meta.env.VITE_API_URL);
      console.log('Razorpay Key ID:', import.meta.env.VITE_RAZORPAY_KEY_ID);
      
      // Create order
      const orderResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/create-order`, {
        amount,
        membershipType,
        userId
      });
      
      console.log('Order created successfully:', orderResponse.data);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: "FIT FUSSION",
        description: `${membershipType} Membership`,
        order_id: orderResponse.data.id,
        handler: async (response) => {
          try {
            console.log('Payment completed, verifying...', response);
            
            // Verify payment
            const verifyResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            console.log('Verification response:', verifyResponse.data);

            if (verifyResponse.data.success) {
              alert('Payment successful!');
              // Call the onSuccess callback if provided
              if (onSuccess) {
                onSuccess();
              }
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            console.error('Error details:', error.response ? error.response.data : 'No response data');
            setError('Payment verification failed. Please contact support.');
            alert('Payment verification failed. Please contact support.');
            
            // Call the onError callback if provided
            if (onError) {
              onError(error);
            }
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      console.log('Opening Razorpay with options:', options);
      
      if (!window.Razorpay) {
        console.error('Razorpay is not loaded!');
        setError('Payment system is not available. Please try again later.');
        alert('Payment system is not available. Please try again later.');
        
        // Call the onError callback if provided
        if (onError) {
          onError(new Error('Razorpay is not loaded'));
        }
        
        setIsLoading(false);
        return;
      }

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error creating order:', error);
      console.error('Error details:', error.response ? error.response.data : 'No response data');
      
      let errorMessage = 'Failed to initiate payment. Please try again.';
      
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = `Server error: ${error.response.status} - ${error.response.data.error || error.response.data.message || 'Unknown error'}`;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your internet connection.';
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = `Error: ${error.message}`;
      }
      
      setError(errorMessage);
      alert(errorMessage);
      
      // Call the onError callback if provided
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handlePayment}
        className="payment-button"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default Payment; 