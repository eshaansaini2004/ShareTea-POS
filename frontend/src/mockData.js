// Mock data service to replace backend API calls
// This allows the frontend to work without a backend database

// Mock products data - 21 items with correct categories
export const mockProducts = [
  // Items 1-10: Milk Tea
  {
    product_id: 1,
    product_name: "Classic Milk Tea",
    product_cost: 4.50,
    base_cost: 4.50,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 2,
    product_name: "Taro Milk Tea",
    product_cost: 5.25,
    base_cost: 5.25,
    product_type: "Tea",
    category_id: "classic_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 3,
    product_name: "Brown Sugar Milk Tea",
    product_cost: 5.75,
    base_cost: 5.75,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 4,
    product_name: "Matcha Milk Tea",
    product_cost: 5.50,
    base_cost: 5.50,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 5,
    product_name: "Thai Milk Tea",
    product_cost: 4.75,
    base_cost: 4.75,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy, Spices",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 6,
    product_name: "Caramel Milk Tea",
    product_cost: 5.95,
    base_cost: 5.95,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 7,
    product_name: "Honey Milk Tea",
    product_cost: 4.25,
    base_cost: 4.25,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 8,
    product_name: "Vanilla Milk Tea",
    product_cost: 5.00,
    base_cost: 5.00,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 9,
    product_name: "Coconut Milk Tea",
    product_cost: 5.25,
    base_cost: 5.25,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy, Nuts",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 10,
    product_name: "Milk Tea Eshaan",
    product_cost: 6.50,
    base_cost: 6.50,
    product_type: "Tea",
    category_id: "classic_tea",
    allergens: "Dairy",
    order_count: 0,
    price_increased: false
  },
  
  // Items 11-14: Classic Tea
  {
    product_id: 11,
    product_name: "Cookies and Cream Milk Tea",
    product_cost: 5.95,
    base_cost: 5.95,
    product_type: "Tea",
    category_id: "milk_tea",
    allergens: "Dairy, Gluten",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 12,
    product_name: "Mango Fruit Tea",
    product_cost: 4.75,
    base_cost: 4.75,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 13,
    product_name: "Oolong Tea",
    product_cost: 3.75,
    base_cost: 3.75,
    product_type: "Tea",
    category_id: "classic_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 14,
    product_name: "Chamomile Tea",
    product_cost: 3.00,
    base_cost: 3.00,
    product_type: "Tea",
    category_id: "classic_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  
  // Items 15-21: Fruit Tea
  {
    product_id: 15,
    product_name: "Mango Fruit Tea",
    product_cost: 4.75,
    base_cost: 4.75,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 16,
    product_name: "Orange Tea",
    product_cost: 4.50,
    base_cost: 4.50,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 17,
    product_name: "Peach Fruit Tea",
    product_cost: 4.25,
    base_cost: 4.25,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 18,
    product_name: "Passion Fruit Tea",
    product_cost: 4.95,
    base_cost: 4.95,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 19,
    product_name: "Lychee Fruit Tea",
    product_cost: 4.50,
    base_cost: 4.50,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 20,
    product_name: "Lemon Fruit Tea",
    product_cost: 4.25,
    base_cost: 4.25,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  },
  {
    product_id: 21,
    product_name: "Mixed Berry Tea",
    product_cost: 5.25,
    base_cost: 5.25,
    product_type: "Tea",
    category_id: "fruit_tea",
    allergens: "None",
    order_count: 0,
    price_increased: false
  }
];

// Mock inventory data
export const mockInventory = [
  { item_id: 1, item_name: "Coffee Beans", amount: 100 },
  { item_id: 2, item_name: "Milk", amount: 50 },
  { item_id: 3, item_name: "Sugar", amount: 75 },
  { item_id: 4, item_name: "Ice cubes", amount: 200 },
  { item_id: 5, item_name: "Green Tea Mix", amount: 30 },
  { item_id: 6, item_name: "Black Tea Mix", amount: 25 },
  { item_id: 7, item_name: "Chai Mix", amount: 20 },
  { item_id: 8, item_name: "Chocolate Syrup", amount: 15 },
  { item_id: 9, item_name: "Vanilla Syrup", amount: 20 },
  { item_id: 10, item_name: "Caramel Syrup", amount: 18 }
];

// Mock transactions data
export const mockTransactions = [
  {
    customer_transaction_num: 1,
    order_id: 1,
    product_id: 1,
    customer_id: 0,
    purchase_date: "2024-01-15T10:30:00Z",
    ice_amount: 0.5,
    topping_type: "None"
  },
  {
    customer_transaction_num: 2,
    order_id: 1,
    product_id: 2,
    customer_id: 0,
    purchase_date: "2024-01-15T10:30:00Z",
    ice_amount: 0,
    topping_type: "Cinnamon"
  }
];

// Mock reports data
export const mockXReport = {
  hours: [
    { hour: "8 AM", orderCount: 5, salesTotal: "$15.50", avgSale: "$3.10" },
    { hour: "9 AM", orderCount: 8, salesTotal: "$28.75", avgSale: "$3.59" },
    { hour: "10 AM", orderCount: 12, salesTotal: "$42.25", avgSale: "$3.52" },
    { hour: "11 AM", orderCount: 15, salesTotal: "$58.50", avgSale: "$3.90" }
  ],
  totalOrders: 40,
  totalSales: "145.00"
};

export const mockZReport = {
  totalSales: "145.00",
  totalTransactions: 40,
  topItem: "Cappuccino",
  topItemCount: 8
};

// Mock sales report data
export const mockSalesReport = [
  {
    product_id: 2,
    product_name: "Cappuccino",
    product_type: "Coffee",
    total_cost: 30.00,
    quantity_sold: 8
  },
  {
    product_id: 1,
    product_name: "Espresso",
    product_type: "Coffee",
    total_cost: 25.00,
    quantity_sold: 10
  }
];

// Mock inventory usage report data
export const mockInventoryUsage = [
  {
    item_id: 1,
    item_name: "Coffee Beans",
    current_stock: 85,
    initial_stock: 100,
    used: 15,
    usage_percentage: 15
  },
  {
    item_id: 2,
    item_name: "Milk",
    current_stock: 35,
    initial_stock: 50,
    used: 15,
    usage_percentage: 30
  }
];

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions that match the real API structure
export const mockApi = {
  // Products
  async fetchProducts() {
    await delay(100);
    return [...mockProducts];
  },

  async createProduct(productData) {
    await delay(100);
    const newProduct = {
      product_id: mockProducts.length + 1,
      ...productData,
      base_cost: productData.product_cost,
      order_count: 0,
      price_increased: false
    };
    mockProducts.push(newProduct);
    return newProduct;
  },

  async updateProduct(id, productData) {
    await delay(100);
    const index = mockProducts.findIndex(p => p.product_id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts[index] = { ...mockProducts[index], ...productData };
    return mockProducts[index];
  },

  async deleteProduct(id) {
    await delay(100);
    const index = mockProducts.findIndex(p => p.product_id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts.splice(index, 1);
    return { message: 'Product deleted successfully', productId: id };
  },

  // Inventory
  async fetchInventory() {
    await delay(100);
    return [...mockInventory];
  },

  async createInventory(inventoryData) {
    await delay(100);
    const newItem = {
      item_id: mockInventory.length + 1,
      ...inventoryData
    };
    mockInventory.push(newItem);
    return newItem;
  },

  async updateInventory(id, inventoryData) {
    await delay(100);
    const index = mockInventory.findIndex(i => i.item_id === id);
    if (index === -1) {
      throw new Error('Inventory item not found');
    }
    mockInventory[index] = { ...mockInventory[index], ...inventoryData };
    return mockInventory[index];
  },

  // Transactions
  async fetchTransactions() {
    await delay(100);
    return [...mockTransactions];
  },

  async createTransaction(transactionData) {
    await delay(100);
    // Simulate transaction creation
    const newTransaction = {
      success: true,
      message: 'Transaction processed successfully',
      transaction_id: Date.now()
    };
    return newTransaction;
  },

  // Reports
  async fetchXReport() {
    await delay(100);
    return { ...mockXReport };
  },

  async fetchZReport() {
    await delay(100);
    return { ...mockZReport };
  },

  async fetchSalesReport(startDate, endDate) {
    await delay(100);
    return [...mockSalesReport];
  },

  async fetchInventoryUsage(startDate, endDate) {
    await delay(100);
    return [...mockInventoryUsage];
  },

  async closeBusinessDay() {
    await delay(100);
    return {
      success: true,
      message: 'Business day closed successfully',
      closure_date: new Date().toISOString()
    };
  }
};
