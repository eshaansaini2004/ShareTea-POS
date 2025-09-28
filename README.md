# Tea Shop Kiosk System

A complete tea shop management system with React frontend, Node.js backend, and PostgreSQL database. Features include real-time dynamic pricing, Google OAuth authentication, weather integration, inventory management, and comprehensive reporting.

## 🚀 Features

- **21 Menu Items** with dynamic pricing based on popularity
- **Google OAuth Authentication** for secure user login
- **Weather API Integration** for location-based recommendations
- **Inventory Management** with real-time tracking
- **Sales Reporting** (X-Report, Z-Report, Sales by Item, Inventory Usage)
- **Order Management** with cart functionality and transaction history
- **Responsive Design** with accessibility features
- **Multi-language Support** with translation controls

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Git

## 🛠️ Development Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project3-team21-team-method
```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   # Database configuration
   PSQL_USER=your_db_username
   PSQL_HOST=localhost
   PSQL_DATABASE=tea_shop_db
   PSQL_PASSWORD=your_db_password
   PSQL_PORT=5432
   SSL_MODE=false
   
   # Server configuration
   API_MASTER_KEY=your_api_key_here
   PORT=8080
   ```

4. Set up the database:
   ```bash
   npm run setup
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:8080`

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   # Google OAuth Configuration
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
   REACT_APP_GOOGLE_CLIENT_SECRET=your_google_client_secret_here

   # Weather API Configuration
   REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here

   # Backend API URL
   REACT_APP_API_URL=http://localhost:8080

   # Optional: API Key for backend authentication
   REACT_APP_API_KEY=
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## 🔧 API Keys Setup

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/oauth2callback` (development)
   - `https://yourdomain.com/oauth2callback` (production)

### OpenWeatherMap API Setup
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key
4. Add it to the frontend `.env` file

## 📊 Database Schema

The system uses PostgreSQL with the following main tables:
- `products` - Menu items with categories and pricing
- `inventory` - Stock management
- `customer_transaction` - Order history
- `business_closure_log` - Report generation
- `menu_item_inventory` - Product-inventory mapping

## 🎯 Usage

### For Customers (Kiosk Mode)
1. Open `http://localhost:3000`
2. Browse the menu by category
3. Add items to cart with customizations
4. Complete order with payment simulation

### For Managers
1. Login with Google OAuth
2. Access Manager Dashboard
3. View and manage:
   - Product inventory
   - Sales reports
   - Order history
   - Business analytics

### For Cashiers
1. Login with Google OAuth
2. Access Cashier Dashboard
3. Process orders and payments
4. View transaction history

## 🧪 Testing

### Backend API Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📁 Project Structure

```
project3-team21-team-method/
├── backend/
│   ├── index.js              # Main Express server
│   ├── auth.js               # Authentication middleware
│   ├── schema.sql            # Database schema
│   ├── seed.sql              # Initial data
│   ├── setup-db.js           # Database setup script
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── views/           # Main application views
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api.js           # API service layer
│   │   └── App.js           # Main application component
│   └── package.json
└── README.md
```

## 🚀 Production Deployment

### Backend Deployment
1. Set up PostgreSQL database (AWS RDS, Heroku Postgres, etc.)
2. Configure environment variables
3. Deploy to server (Heroku, AWS EC2, etc.)
4. Run database setup: `npm run setup`

### Frontend Deployment
1. Build production version: `npm run build`
2. Deploy to hosting service (Netlify, Vercel, etc.)
3. Update API URL in environment variables

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check PostgreSQL is running
   - Verify database credentials in `.env`
   - Ensure database exists

2. **Frontend Not Loading Data**
   - Check backend is running on port 8080
   - Verify API URL in frontend `.env`
   - Check browser console for errors

3. **OAuth Not Working**
   - Verify Google Client ID is correct
   - Check redirect URI matches exactly
   - Ensure OAuth consent screen is configured

4. **Weather API Not Working**
   - Verify OpenWeatherMap API key
   - Check API key has proper permissions
   - Ensure API key is not expired

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Inventory
- `GET /api/inventory` - Get inventory status
- `POST /api/inventory` - Add inventory item
- `PUT /api/inventory/:id` - Update inventory

### Transactions
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions` - Get transaction history

### Reports
- `GET /api/reports/x-report` - X-Report
- `GET /api/reports/z-report` - Z-Report
- `GET /api/reports/sales` - Sales report
- `GET /api/reports/inventory-usage` - Inventory usage report

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Eshaan Saini** - Full-stack development, database design, API implementation
- **Michael Tran** - Project documentation and setup

---

**Note**: This project was developed as part of a university course and is intended for educational purposes.