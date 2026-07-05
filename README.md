================================================================================
                          CRAFTMYFOLIO - PROJECT README
================================================================================

PROJECT OVERVIEW:
CraftMyFolio is a full-stack web application that allows users to create and 
showcase professional portfolios with multiple customizable templates. The 
application is built using the MERN stack (MongoDB, Express.js, React, Node.js).

================================================================================
                              PROJECT STRUCTURE
================================================================================

ROOT DIRECTORY:
├── backend/                 - Node.js/Express server and API
├── frontend/                - React/Vite frontend application
└── README.txt              - This file

BACKEND STRUCTURE (backend/):
├── package.json            - Backend dependencies
├── public/temp/            - Temporary file storage for uploads
└── src/
    ├── app.js              - Express application setup
    ├── server.js           - Server entry point
    ├── config/
    │   └── db.js           - Database configuration and connection
    ├── controller/         - Request handlers
    │   ├── authController.js      - Authentication logic
    │   └── folioController.js     - Portfolio management logic
    ├── middleware/         - Custom middleware
    │   ├── authMiddleware.js      - Authentication verification
    │   └── multer.js              - File upload configuration
    ├── model/              - Database models
    │   ├── userModel.js           - User schema
    │   └── folioModel.js          - Portfolio schema
    ├── route/              - API route definitions
    │   ├── authRoutes.js          - Authentication endpoints
    │   └── folioRoutes.js         - Portfolio endpoints
    └── util/               - Utility functions
        ├── asyncHandler.js        - Error handling wrapper
        ├── cloudUpload.js         - Cloud file upload utilities
        └── controllerUtils.js     - Helper functions

FRONTEND STRUCTURE (frontend/):
├── package.json            - Frontend dependencies
├── vite.config.js          - Vite build configuration
├── eslint.config.js        - ESLint configuration
├── index.html              - HTML entry point
├── public/                 - Static assets
└── src/
    ├── main.jsx            - React entry point
    ├── App.jsx             - Main app component
    ├── Layout.jsx          - Layout wrapper component
    ├── index.css           - Global styles
    ├── assets/
    │   └── templates/      - Template assets
    ├── components/         - Reusable components
    │   ├── Header/         - Navigation and header components
    │   ├── ui/             - UI components (buttons, forms, modals)
    │   ├── FeaturesSection.jsx
    │   ├── Footer.jsx
    │   ├── FormButton.jsx
    │   ├── FormInput.jsx
    │   └── HeroSection.jsx
    ├── context/            - React context for state management
    │   ├── AuthContext.jsx
    │   └── AuthContextStore.js
    ├── features/           - Feature-specific components
    │   └── dashboard/      - Dashboard and profile management forms
    ├── folioTemplate/      - Portfolio template components
    │   ├── Bento.jsx
    │   ├── Modern.jsx
    │   ├── Neon.jsx
    │   ├── Terminal.jsx
    │   ├── Third.jsx
    │   ├── First.jsx
    │   ├── TemplateClassic.jsx
    │   └── index.js
    ├── hooks/              - Custom React hooks
    │   ├── useAuth.js
    │   ├── useDebounce.js
    │   ├── useUpdateUser.js
    │   ├── useUpdateUserAvatar.js
    │   └── useUser.js
    ├── pages/              - Page components
    │   ├── Home.jsx
    │   ├── Signin.jsx
    │   ├── Signup.jsx
    │   ├── Dashboard.jsx
    │   ├── CreateFolio.jsx
    │   └── PublicFolioPage.jsx
    └── backup/             - Backup/archived components

================================================================================
                              FEATURES
================================================================================

USER AUTHENTICATION:
• User registration and login
• Secure authentication middleware
• Session management with JWT tokens

PORTFOLIO MANAGEMENT:
• Create and customize portfolios
• Multiple template options (Bento, Modern, Neon, Terminal, etc.)
• Edit and delete portfolios
• Publish portfolios as public pages

PROFILE CUSTOMIZATION:
• Basic details (name, bio, contact)
• Education history
• Work experience
• Projects showcase
• Skills listing
• Testimonials
• Social media links
• Avatar upload

PUBLIC PORTFOLIOS:
• View published portfolios
• Responsive design
• Clean, professional templates
• Share portfolios with others

FILE UPLOAD:
• Avatar/profile picture upload
• Cloud storage integration
• Multer middleware for file handling

================================================================================
                          TECHNOLOGY STACK
================================================================================

BACKEND:
• Node.js - JavaScript runtime
• Express.js - Web framework
• MongoDB - NoSQL database
• Multer - File upload middleware
• JWT - Authentication tokens

FRONTEND:
• React - UI library
• Vite - Build tool and dev server
• React Router - Navigation
• Context API - State management
• CSS - Styling

================================================================================
                          INSTALLATION & SETUP
================================================================================

PREREQUISITES:
• Node.js (v14 or higher)
• MongoDB (local or cloud Atlas)
• Git

BACKEND SETUP:
1. Navigate to backend directory:
   cd backend

2. Install dependencies:
   npm install

3. Create .env file with:
   - MONGODB_URI: Your MongoDB connection string
   - JWT_SECRET: Secret key for JWT tokens
   - CLOUD_UPLOAD_CONFIG: Cloud storage credentials
   - PORT: Server port (default 5000)

4. Start the server:
   npm start

FRONTEND SETUP:
1. Navigate to frontend directory:
   cd frontend

2. Install dependencies:
   npm install

3. Create .env file with:
   - VITE_API_URL: Backend API URL (e.g., http://localhost:5000)

4. Start development server:
   npm run dev

5. Build for production:
   npm run build

================================================================================
                            USAGE GUIDE
================================================================================

1. ACCESS THE APPLICATION:
   - Open http://localhost:5173 (frontend)
   - Backend API: http://localhost:5000

2. CREATE AN ACCOUNT:
   - Click "Sign Up" on the home page
   - Enter your email and password
   - Complete verification if required

3. BUILD YOUR PORTFOLIO:
   - Go to Dashboard after login
   - Add your basic information
   - Fill in education, experience, projects, skills
   - Add testimonials and social links
   - Upload a profile picture

4. CREATE & CUSTOMIZE PORTFOLIOS:
   - Click "Create Portfolio"
   - Choose a template
   - Customize colors, fonts, and layout
   - Add your content from profile
   - Save and publish

5. VIEW PUBLIC PORTFOLIO:
   - Share your portfolio link with others
   - View on PublicFolioPage component

================================================================================
                            API ENDPOINTS
================================================================================

AUTHENTICATION:
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - User login
POST   /api/auth/logout        - User logout
GET    /api/auth/me            - Get current user

PORTFOLIO:
GET    /api/folio              - Get all portfolios (public)
GET    /api/folio/:id          - Get single portfolio
POST   /api/folio              - Create new portfolio
PUT    /api/folio/:id          - Update portfolio
DELETE /api/folio/:id          - Delete portfolio
GET    /api/folio/user/:userId - Get user's portfolios

USER:
GET    /api/user/:id           - Get user profile
PUT    /api/user/:id           - Update user profile
POST   /api/user/avatar        - Upload avatar

================================================================================
                          DEVELOPMENT NOTES
================================================================================

CODE STANDARDS:
• Use async/await for asynchronous operations
• Implement error handling with asyncHandler utility
• Follow RESTful API conventions
• Use context API for global state management
• Component-based architecture for reusability

SECURITY:
• Validate all user inputs on both frontend and backend
• Use HTTPS in production
• Store sensitive data in environment variables
• Implement CORS policies
• Use secure password hashing

PERFORMANCE:
• Debounce user input in search and forms
• Lazy load components and templates
• Optimize image uploads
• Implement caching where appropriate

================================================================================
                            TROUBLESHOOTING
================================================================================

BACKEND CONNECTION ISSUES:
• Check MongoDB connection string in .env
• Ensure MongoDB service is running
• Verify network connectivity

FRONTEND BUILD ISSUES:
• Clear node_modules and reinstall: rm -rf node_modules && npm install
• Clear Vite cache: rm -rf .vite
• Check Node.js version compatibility

FILE UPLOAD ISSUES:
• Check public/temp directory permissions
• Verify cloud storage credentials
• Check file size limits in multer config

AUTHENTICATION ISSUES:
• Clear browser cookies and local storage
• Verify JWT token expiration settings
• Check auth middleware configuration

================================================================================
                          DEPLOYMENT
================================================================================

BACKEND DEPLOYMENT:
1. Push code to GitHub
2. Deploy to: Heroku, Railway, or AWS
3. Set environment variables on hosting platform
4. Configure MongoDB Atlas for production

FRONTEND DEPLOYMENT:
1. Build: npm run build
2. Deploy dist/ folder to: Vercel, Netlify, or GitHub Pages
3. Set VITE_API_URL to production backend URL

================================================================================
                          CONTRIBUTING
================================================================================

1. Create a feature branch: git checkout -b feature/your-feature
2. Make your changes
3. Commit: git commit -m "Add your feature"
4. Push: git push origin feature/your-feature
5. Create a Pull Request

================================================================================
                            LICENSE
================================================================================

This project is available for educational and commercial use.
Please respect intellectual property rights of content creators.

================================================================================
                          CONTACT & SUPPORT
================================================================================

For issues, feature requests, or questions:
• Create an issue on GitHub
• Contact the development team
• Check project documentation

================================================================================
                          LAST UPDATED
================================================================================

Date: May 20, 2026
Version: 1.0.0
Repository: https://github.com/tnsqqq/TeamTaskManager

================================================================================
