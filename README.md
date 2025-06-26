# 💪 FIT-FUSSION

A comprehensive gym management platform built with the MERN stack, featuring membership subscriptions, BMI calculator, and complete gym services management with integrated Razorpay payment gateway.

## 🌟 Live Demo

**[🔗 Visit FIT-FUSSION](https://fit-fussions.vercel.app/)**

## 📋 Overview

FIT-FUSSION is a modern, full-featured gym website that provides a complete digital solution for fitness enthusiasts and gym management. The platform offers membership subscriptions, fitness tools, and comprehensive information about gym services, all powered by secure payment processing and responsive design.

## ✨ Features

### 🏠 Core Pages
- **Home Page** - Dynamic landing page with gym overview and highlights
- **About Us** - Detailed information about the gym, mission, and values
- **Blog** - Fitness tips, workout guides, and health articles
- **Gallery** - Showcase of gym facilities, equipment, and member activities
- **Membership** - Subscription plans and pricing information

### 💳 Payment & Subscription
- **Razorpay Integration** - Secure payment processing for memberships
- **Multiple Membership Plans** - Flexible subscription options
- **Payment History** - Track subscription payments and renewals
- **Secure Transactions** - End-to-end encrypted payment processing

### 🧮 Fitness Tools
- **BMI Calculator** - Body Mass Index calculation tool
- **Health Metrics** - Track and monitor fitness progress
- **Workout Planners** - Personalized fitness routines

### 🎯 Additional Features
- **Responsive Design** - Optimized for all devices
- **User Authentication** - Secure login and registration
- **Member Dashboard** - Personal account management
- **Contact System** - Easy communication with gym staff
- **Modern UI/UX** - Clean and intuitive interface

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **HTML5 & CSS3** - Structure and styling
- **JavaScript (ES6+)** - Programming language
- **Responsive Design** - Mobile-first approach
- **React Router** - Client-side routing

### Backend
- **Node.js** - Server-side runtime environment
- **Express.js** - Web application framework
- **RESTful APIs** - Clean API architecture
- **JWT Authentication** - Secure user authentication

### Database
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **Database Schemas** - Users, memberships, payments, blog posts

### Payment Gateway
- **Razorpay API** - Secure payment processing
- **Subscription Management** - Recurring payment handling
- **Webhook Integration** - Real-time payment status updates

### Deployment
- **Vercel** - Frontend deployment
- **MongoDB Atlas** - Cloud database hosting
- **Environment Management** - Secure configuration

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Razorpay account for payment integration

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohdOves/FIT-FUSSION.git
   cd FIT-FUSSION
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   # Database Configuration
   MONGODB_URI=your_mongodb_connection_string
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   
   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   
   # Email Configuration (for notifications)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
   REACT_APP_SITE_URL=http://localhost:3000
   ```

5. **Start the development servers**
   
   Backend server:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend server (in a new terminal):
   ```bash
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📁 Project Structure

```
FIT-FUSSION/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── BMICalculator/
│   │   │   └── PaymentGateway/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Blog/
│   │   │   ├── Gallery/
│   │   │   ├── Membership/
│   │   │   └── Dashboard/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── membershipController.js
│   │   ├── paymentController.js
│   │   └── blogController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Membership.js
│   │   ├── Payment.js
│   │   └── Blog.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── membership.js
│   │   ├── payment.js
│   │   └── blog.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── database.js
│   └── server.js
└── README.md
```

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Membership Routes
- `GET /api/memberships` - Get all membership plans
- `POST /api/memberships/subscribe` - Subscribe to membership
- `GET /api/memberships/user` - Get user memberships
- `PUT /api/memberships/:id` - Update membership

### Payment Routes
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments/history` - Payment history
- `POST /api/payments/webhook` - Razorpay webhook

### Blog Routes
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get single blog post
- `POST /api/blogs` - Create blog post (admin)
- `PUT /api/blogs/:id` - Update blog post (admin)

### Utility Routes
- `POST /api/utils/bmi` - Calculate BMI
- `POST /api/contact` - Contact form submission

## 💳 Razorpay Integration Features

### Payment Processing
- **Membership Subscriptions** - Monthly/yearly plans
- **One-time Payments** - Personal training, merchandise
- **Secure Checkout** - PCI DSS compliant
- **Multiple Payment Methods** - Cards, UPI, Net Banking, Wallets

### Subscription Management
- **Recurring Payments** - Automatic renewal
- **Plan Upgrades/Downgrades** - Flexible membership changes
- **Payment Tracking** - Complete transaction history
- **Refund Processing** - Automated refund handling

## 🧮 BMI Calculator Features

- **Interactive Calculator** - Real-time BMI calculation
- **Health Categories** - Underweight, Normal, Overweight, Obese
- **Personalized Recommendations** - Fitness advice based on BMI
- **Progress Tracking** - Save and monitor BMI history
- **Visual Indicators** - Colorful progress charts

## 📱 Responsive Design

Fully optimized for all devices:
- 📱 **Mobile First** - Optimized for smartphones
- 🖥️ **Desktop** - Full-featured desktop experience
- 📱 **Tablet** - Touch-friendly tablet interface
- ⌚ **Smartwatch** - Basic compatibility

## 🌐 Deployment

### Frontend Deployment (Vercel)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Automatic deployment on push to main

### Backend Deployment Options
- **Railway** - Easy Node.js deployment
- **Heroku** - Platform-as-a-Service
- **DigitalOcean** - VPS hosting
- **AWS** - Cloud infrastructure

### Database Hosting
- **MongoDB Atlas** - Cloud database service
- **Automated backups** - Data protection
- **Global clusters** - Improved performance

## 🔒 Security Features

- **JWT Authentication** - Secure user sessions
- **Password Hashing** - bcrypt encryption
- **CORS Protection** - Cross-origin security
- **Input Validation** - Prevent injection attacks
- **Rate Limiting** - API abuse protection
- **HTTPS Enforcement** - Secure data transmission

## 🎯 Membership Plans

### Available Plans
- **Basic Plan** - Access to gym equipment
- **Premium Plan** - Equipment + group classes
- **VIP Plan** - All features + personal training
- **Corporate Plan** - Group memberships for companies

### Features by Plan
- Equipment access
- Group fitness classes
- Personal training sessions
- Nutrition consultations
- Special events access

## 📊 Admin Dashboard Features

- **Member Management** - View and manage all members
- **Payment Analytics** - Revenue and subscription metrics
- **Content Management** - Blog posts and gallery updates
- **Membership Analytics** - Plan popularity and retention
- **Financial Reports** - Detailed payment reports

## 🤝 Contributing

We welcome contributions to FIT-FUSSION! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Write clean, commented code
- Test new features thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohd Oves**
- 🎓 Computer Science Engineering Student
- 💻 Full Stack Developer
- 🏋️ Fitness Enthusiast
- 📧 Email: [your-email@domain.com]
- 🔗 GitHub: [@MohdOves](https://github.com/MohdOves)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)



## 🙏 Acknowledgments

- [Razorpay](https://razorpay.com/) for secure payment processing
- [Vercel](https://vercel.com/) for hosting services
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- Fitness community for inspiration and feedback
- Open source contributors and maintainers



---

⭐ **Transform your fitness journey with FIT-FUSSION!** ⭐

*"Your fitness journey starts here. Join the FIT-FUSSION community today!"*
