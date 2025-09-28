# Changelog

All notable changes to the Tea Shop Kiosk System project.

## [1.0.0] - 2024-01-15

### Added
- Complete PostgreSQL database integration
- 21 menu items with proper categorization (milk_tea, fruit_tea, classic_tea)
- Dynamic pricing system based on product popularity
- Real-time inventory management
- Comprehensive reporting system (X-Report, Z-Report, Sales, Inventory Usage)
- Google OAuth authentication integration
- OpenWeatherMap API integration
- Order management with cart functionality
- Transaction history and order tracking
- Manager dashboard with full CRUD operations
- Cashier interface for order processing
- Responsive design with Material-UI components
- Accessibility features and high contrast mode
- Multi-language support with translation controls
- Product customization (ice level, toppings)
- Digital receipt generation
- Business day closure functionality

### Changed
- Replaced all mock data with real database integration
- Updated API endpoints to include `/api` prefix
- Enhanced error handling and validation
- Improved UI/UX with better responsive design
- Updated authentication flow to use real Google OAuth

### Fixed
- Sales report JavaScript errors (salesAmount.toFixed issue)
- Menu board not displaying products due to missing category_id
- API path mismatches between frontend and backend
- Database connection issues and SSL configuration
- OAuth authentication flow and redirect handling
- Weather API integration and fallback handling

### Technical Improvements
- Added proper database schema with foreign key relationships
- Implemented database seeding with 21 products and inventory
- Added comprehensive API documentation
- Enhanced error handling and logging
- Improved code organization and modularity
- Added proper environment variable management
- Implemented proper CORS configuration
- Added database connection pooling

### Database Schema
- `products` table with category_id, dynamic pricing fields
- `inventory` table for stock management
- `customer_transaction` table for order history
- `business_closure_log` table for report generation
- `menu_item_inventory` table for product-inventory mapping

### API Endpoints
- `GET /api/products` - Products with dynamic pricing
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/inventory` - Inventory status
- `POST /api/inventory` - Add inventory
- `PUT /api/inventory/:id` - Update inventory
- `POST /api/transactions` - Create transaction
- `GET /api/transactions` - Transaction history
- `GET /api/reports/x-report` - X-Report
- `GET /api/reports/z-report` - Z-Report
- `GET /api/reports/sales` - Sales report
- `GET /api/reports/inventory-usage` - Inventory usage
- `POST /api/business/close` - Close business day

### Removed
- All mock data files and temporary setup scripts
- Redundant documentation files
- Unused configuration files
- Development-only scripts

### Security
- Implemented proper API key validation
- Added CORS configuration for production
- Secured database connections with SSL support
- Added input validation and sanitization
- Implemented proper error handling without data leakage
