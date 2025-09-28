# Tea Shop Backend API

Node.js/Express backend for the Tea Shop Kiosk System with PostgreSQL database integration.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env` file with:
   ```env
   PSQL_USER=your_db_username
   PSQL_HOST=localhost
   PSQL_DATABASE=tea_shop_db
   PSQL_PASSWORD=your_db_password
   PSQL_PORT=5432
   SSL_MODE=false
   API_MASTER_KEY=your_api_key_here
   PORT=8080
   ```

3. **Set up Database**
   ```bash
   npm run setup
   ```

4. **Start Server**
   ```bash
   npm start
   ```

## 📊 Database Setup

The `npm run setup` command will:
- Create the database schema
- Seed the database with 21 menu items
- Set up initial inventory
- Create sample transactions

## 🔧 Available Scripts

- `npm start` - Start the server
- `npm run setup` - Set up database schema and seed data
- `npm test` - Test API endpoints

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products with dynamic pricing
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
- `GET /api/reports/x-report` - X-Report (current session)
- `GET /api/reports/z-report` - Z-Report (since last closure)
- `GET /api/reports/sales?startDate=&endDate=` - Sales report by date range
- `GET /api/reports/inventory-usage` - Inventory usage report

### Business Operations
- `POST /api/business/close` - Close business day (for Z-Report)

## 🗄️ Database Schema

### Products Table
- `product_id` - Primary key
- `product_name` - Product name
- `product_cost` - Current price (with dynamic pricing)
- `base_cost` - Original price
- `product_type` - Product type
- `category_id` - Category (milk_tea, fruit_tea, classic_tea)
- `allergens` - Allergen information
- `order_count` - Orders today (for dynamic pricing)
- `price_increased` - Whether price was increased

### Other Tables
- `inventory` - Stock management
- `customer_transaction` - Order history
- `business_closure_log` - Business day closures
- `menu_item_inventory` - Product-inventory mapping

## 🔄 Dynamic Pricing

Products automatically increase in price based on popularity:
- Price increases by 1% for each order
- Maximum increase: 20%
- Resets daily

## 🐛 Troubleshooting

1. **Database Connection Issues**
   - Ensure PostgreSQL is running
   - Check credentials in `.env`
   - Verify database exists

2. **Port Already in Use**
   - Change PORT in `.env`
   - Kill existing process: `lsof -ti:8080 | xargs kill`

3. **Database Setup Fails**
   - Check PostgreSQL user permissions
   - Ensure database exists
   - Check SSL_MODE setting