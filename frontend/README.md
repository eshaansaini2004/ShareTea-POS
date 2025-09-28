# Tea Shop Frontend

React-based frontend for the Tea Shop Kiosk System with Material-UI components and responsive design.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env` file with:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
   REACT_APP_GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here
   REACT_APP_API_URL=http://localhost:8080
   REACT_APP_API_KEY=
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## 🎯 Features

### Customer Interface (Kiosk Mode)
- **Menu Board** - Browse 21 tea products by category
- **Product Customization** - Ice level, toppings, special requests
- **Shopping Cart** - Add/remove items, view total
- **Order Confirmation** - Review and confirm orders
- **Receipt Generation** - Digital receipts with order details

### Manager Dashboard
- **Product Management** - Add/edit/delete menu items
- **Inventory Tracking** - Monitor stock levels
- **Sales Reports** - X-Report, Z-Report, sales analytics
- **Order History** - View all transactions
- **Business Analytics** - Revenue and performance metrics

### Cashier Interface
- **Order Processing** - Handle customer orders
- **Payment Processing** - Process payments
- **Transaction Management** - View and manage orders

## 🎨 UI Components

### Core Components
- `ProductCard` - Individual product display
- `ProductGrid` - Product listing with filtering
- `CartSection` - Shopping cart management
- `OrderSummary` - Order review and confirmation
- `ReceiptDialog` - Receipt display

### Management Components
- `ManagerView` - Main manager dashboard
- `ManagerProductView` - Product management
- `ManagerInventoryView` - Inventory management
- `ManagerReportView` - Reports and analytics

### Utility Components
- `SearchBar` - Product search functionality
- `CategorySelector` - Category filtering
- `AllergenIcon` - Allergen information display
- `WeatherModal` - Weather information
- `TranslationControl` - Language switching

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## 🎨 Styling

The app uses Material-UI (MUI) for consistent theming and responsive design:
- **Dark/Light Theme** support
- **High Contrast Mode** for accessibility
- **Responsive Design** for all screen sizes
- **Custom Color Palette** for tea shop branding

## 🔐 Authentication

### Google OAuth Integration
- Secure login with Google accounts
- Automatic user session management
- Role-based access control
- Demo mode for testing without OAuth

### User Roles
- **Customer** - Browse menu, place orders
- **Cashier** - Process orders, handle payments
- **Manager** - Full system access, reports, inventory

## 🌐 API Integration

### Backend API
- RESTful API calls to Node.js backend
- Real-time data synchronization
- Error handling and loading states
- Automatic retry logic

### External APIs
- **Google OAuth** - User authentication
- **OpenWeatherMap** - Weather data for recommendations

## 📱 Responsive Design

The app is fully responsive and works on:
- **Desktop** - Full feature set
- **Tablet** - Optimized touch interface
- **Mobile** - Kiosk mode for mobile devices

## ♿ Accessibility Features

- **Screen Reader Support** - ARIA labels and descriptions
- **Keyboard Navigation** - Full keyboard accessibility
- **High Contrast Mode** - Enhanced visibility
- **Font Size Controls** - Adjustable text size
- **Color Blind Support** - Accessible color schemes

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
- Component unit tests
- API integration tests
- User interaction tests
- Accessibility tests

## 🚀 Production Build

### Build for Production
```bash
npm run build
```

### Environment Variables for Production
```env
REACT_APP_API_URL=https://your-backend-domain.com
REACT_APP_GOOGLE_CLIENT_ID=your_production_client_id
REACT_APP_OPENWEATHER_API_KEY=your_production_api_key
```

## 🐛 Troubleshooting

### Common Issues

1. **App Not Loading**
   - Check if backend is running on port 8080
   - Verify API_URL in `.env`
   - Check browser console for errors

2. **OAuth Not Working**
   - Verify Google Client ID
   - Check redirect URI configuration
   - Ensure OAuth consent screen is set up

3. **Weather Not Loading**
   - Check OpenWeatherMap API key
   - Verify API key permissions
   - Check network connectivity

4. **Products Not Loading**
   - Verify backend API is responding
   - Check database connection
   - Review API endpoint URLs

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProductCard.js
│   ├── CartSection.js
│   ├── SearchBar.js
│   └── ...
├── views/              # Main application views
│   ├── KioskView.js
│   ├── ManagerView.js
│   ├── MenuBoardView.js
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useCart.js
│   ├── useProducts.js
│   └── ...
├── api.js              # API service layer
├── authService.js      # Authentication service
├── App.js              # Main application component
└── theme.js            # Material-UI theme configuration
```

## 🤝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Ensure accessibility compliance
4. Update documentation as needed