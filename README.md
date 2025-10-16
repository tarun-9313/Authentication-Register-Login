# Authentication & Authorization System

A Node.js-based authentication and authorization system built with Express.js, MongoDB, and JWT (JSON Web Tokens). This project provides user registration, login functionality, and role-based access control with admin privileges.

## 🚀 Features

- **User Registration**: Create new user accounts with username, email, and password
- **User Login**: Secure authentication with JWT tokens
- **Password Hashing**: Secure password storage using bcrypt
- **Role-Based Access Control**: Support for both regular users and admin users
- **Protected Routes**: Middleware-based route protection
- **Admin Dashboard**: Special admin-only access
- **CORS Support**: Cross-origin resource sharing enabled

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Auth-register-login
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONG0_URL=mongodb://localhost:27017/your-database-name
   JSON_WEB_TOKEN=your-secret-jwt-key
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` (or the port specified in your environment variables).

## 📁 Project Structure

```
Auth-register-login/
├── controllers/
│   └── user-controllers.js    # User registration and login logic
├── database/
│   └── db.js                  # MongoDB connection configuration
├── middleware/
│   ├── auth-middleware.js     # JWT authentication middleware
│   └── admin-middleware.js    # Admin role verification middleware
├── model/
│   └── user.js                # User schema definition
├── routes/
│   ├── user-routes.js         # Authentication routes
│   ├── home-routes.js         # Protected home routes
│   └── admin-routes.js        # Admin-only routes
├── index.js                   # Main application entry point
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## 🔧 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/register` | Register a new user | Public |
| GET | `/login` | Login user and get JWT token | Public |

### Protected Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/home/home` | Access home page | Authenticated users |
| GET | `/api/welcome/admin` | Access admin dashboard | Admin users only |

## 📝 API Usage Examples

### User Registration
```bash
POST /api/auth/register
Content-Type: application/json

{
  "userName": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "role": "user"
}
```

### User Login
```bash
GET /api/auth/login
Content-Type: application/json

{
  "userName": "johndoe",
  "password": "securepassword123"
}
```

### Accessing Protected Routes
```bash
GET /api/home/home
Authorization: Bearer <your-jwt-token>
```

### Accessing Admin Routes
```bash
GET /api/welcome/admin
Authorization: Bearer <admin-jwt-token>
```

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication with 10-minute expiration
- **Input Validation**: Username and email uniqueness validation
- **Role-Based Access**: Separate middleware for admin-only routes
- **CORS Protection**: Cross-origin request handling

## 🗄️ Database Schema

### User Model
```javascript
{
  userName: String (required, unique, trimmed)
  email: String (required, trimmed)
  password: String (required, hashed)
  role: String (enum: ["user", "admin"], default: "user")
}
```

## 🚨 Important Notes

1. **Environment Variables**: Make sure to set up your `.env` file with proper MongoDB connection string and JWT secret
2. **Database Connection**: The application expects MongoDB to be running and accessible
3. **Token Expiration**: JWT tokens expire after 10 minutes for security
4. **Error Handling**: The application includes basic error handling but consider adding more comprehensive error management for production use

## 🐛 Known Issues

- There's a typo in the database connection variable name (`MONG0_URL` instead of `MONGO_URL`)
- Login endpoint uses GET method instead of POST (should be POST for security)
- Some error messages have typos (e.g., "messae" instead of "message")

## 🔄 Future Improvements

- Add input validation middleware
- Implement refresh token mechanism
- Add password reset functionality
- Include comprehensive error handling
- Add API documentation with Swagger
- Implement rate limiting
- Add logging system
- Include unit and integration tests

## 📄 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.
