import Razorpay from 'razorpay';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the correct path
config({ path: path.join(__dirname, '../config.env') });

// Check if the required credentials are available
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('Razorpay credentials are not properly configured in environment variables');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export default razorpay; 