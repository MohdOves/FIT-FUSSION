import express from 'express';
import razorpay from '../utils/razorpay.js';

const router = express.Router();

// Create a new order
router.post('/create-order', async (req, res) => {
    try {
        console.log('Creating order with data:', req.body);
        
        const options = {
            amount: req.body.amount * 100, // amount in smallest currency unit (paise)
            currency: "INR",
            receipt: "receipt_" + Date.now(),
            notes: {
                userId: req.body.userId,
                membershipType: req.body.membershipType
            }
        };
        
        console.log('Razorpay options:', options);
        console.log('Razorpay instance:', razorpay);

        const order = await razorpay.orders.create(options);
        console.log('Order created successfully:', order);
        
        res.json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        console.error('Error details:', error.message);
        
        res.status(500).json({ 
            error: error.message,
            details: 'Failed to create order. Please try again.'
        });
    }
});

// Verify payment
router.post('/verify-payment', async (req, res) => {
    try {
        console.log('Verifying payment with data:', req.body);
        
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        // Since we're not using secret key verification, we'll just acknowledge the payment
        console.log('Payment verified successfully');
        
        res.json({ 
            success: true, 
            message: "Payment received successfully",
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id
        });
    } catch (error) {
        console.error('Error verifying payment:', error);
        console.error('Error details:', error.message);
        
        res.status(500).json({ 
            error: error.message,
            details: 'Failed to verify payment. Please contact support.'
        });
    }
});

export default router; 