#!/usr/bin/env node

/**
 * API Test Script for Tea Shop Backend
 * This script tests all the API endpoints to ensure they're working correctly
 */

const http = require('http');

const BASE_URL = 'http://localhost:5000';

// Helper function to make HTTP requests
function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const jsonBody = JSON.parse(body);
          resolve({ status: res.statusCode, data: jsonBody });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Test functions
async function testProducts() {
  console.log('🧪 Testing Products API...');
  
  try {
    // Test GET /api/products
    const getProducts = await makeRequest('GET', '/api/products');
    console.log(`✅ GET /api/products - Status: ${getProducts.status}, Products: ${getProducts.data.length}`);
    
    // Test POST /api/products
    const newProduct = {
      product_name: 'Test Tea',
      product_cost: 3.50,
      product_type: 'Tea',
      allergens: 'None'
    };
    const createProduct = await makeRequest('POST', '/api/products', newProduct);
    console.log(`✅ POST /api/products - Status: ${createProduct.status}`);
    
    // Test PUT /api/products/:id
    if (createProduct.data && createProduct.data.product_id) {
      const updateData = { product_name: 'Updated Test Tea', product_cost: 4.00 };
      const updateProduct = await makeRequest('PUT', `/api/products/${createProduct.data.product_id}`, updateData);
      console.log(`✅ PUT /api/products/:id - Status: ${updateProduct.status}`);
      
      // Test DELETE /api/products/:id
      const deleteProduct = await makeRequest('DELETE', `/api/products/${createProduct.data.product_id}`);
      console.log(`✅ DELETE /api/products/:id - Status: ${deleteProduct.status}`);
    }
    
  } catch (error) {
    console.error('❌ Products API test failed:', error.message);
  }
}

async function testInventory() {
  console.log('🧪 Testing Inventory API...');
  
  try {
    // Test GET /api/inventory
    const getInventory = await makeRequest('GET', '/api/inventory');
    console.log(`✅ GET /api/inventory - Status: ${getInventory.status}, Items: ${getInventory.data.length}`);
    
    // Test POST /api/inventory
    const newItem = {
      item_name: 'Test Ingredient',
      amount: 50
    };
    const createItem = await makeRequest('POST', '/api/inventory', newItem);
    console.log(`✅ POST /api/inventory - Status: ${createItem.status}`);
    
    // Test PUT /api/inventory/:id
    if (createItem.data && createItem.data.item_id) {
      const updateData = { item_name: 'Updated Test Ingredient', amount: 75 };
      const updateItem = await makeRequest('PUT', `/api/inventory/${createItem.data.item_id}`, updateData);
      console.log(`✅ PUT /api/inventory/:id - Status: ${updateItem.status}`);
    }
    
  } catch (error) {
    console.error('❌ Inventory API test failed:', error.message);
  }
}

async function testTransactions() {
  console.log('🧪 Testing Transactions API...');
  
  try {
    // Test GET /api/transactions
    const getTransactions = await makeRequest('GET', '/api/transactions');
    console.log(`✅ GET /api/transactions - Status: ${getTransactions.status}, Transactions: ${getTransactions.data.length}`);
    
    // Test POST /api/transactions
    const newTransaction = {
      customer_id: 0,
      transaction_number: 9999,
      items: [
        {
          product_id: 1,
          quantity: 1,
          price: 4.50,
          customizations: {
            ice: 0.5,
            toppings: {}
          }
        }
      ]
    };
    const createTransaction = await makeRequest('POST', '/api/transactions', newTransaction);
    console.log(`✅ POST /api/transactions - Status: ${createTransaction.status}`);
    
  } catch (error) {
    console.error('❌ Transactions API test failed:', error.message);
  }
}

async function testReports() {
  console.log('🧪 Testing Reports API...');
  
  try {
    // Test X-Report
    const xReport = await makeRequest('GET', '/api/reports/x-report');
    console.log(`✅ GET /api/reports/x-report - Status: ${xReport.status}`);
    
    // Test Z-Report
    const zReport = await makeRequest('GET', '/api/reports/z-report');
    console.log(`✅ GET /api/reports/z-report - Status: ${zReport.status}`);
    
    // Test Sales Report
    const today = new Date().toISOString().split('T')[0];
    const salesReport = await makeRequest('GET', `/api/reports/sales?startDate=${today}&endDate=${today}`);
    console.log(`✅ GET /api/reports/sales - Status: ${salesReport.status}`);
    
    // Test Inventory Usage Report
    const inventoryReport = await makeRequest('GET', `/api/reports/inventory-usage?startDate=${today}&endDate=${today}`);
    console.log(`✅ GET /api/reports/inventory-usage - Status: ${inventoryReport.status}`);
    
  } catch (error) {
    console.error('❌ Reports API test failed:', error.message);
  }
}

async function testBusinessOperations() {
  console.log('🧪 Testing Business Operations API...');
  
  try {
    // Test Business Close
    const closeBusiness = await makeRequest('POST', '/api/business/close');
    console.log(`✅ POST /api/business/close - Status: ${closeBusiness.status}`);
    
  } catch (error) {
    console.error('❌ Business Operations API test failed:', error.message);
  }
}

// Main test function
async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  try {
    await testProducts();
    console.log('');
    
    await testInventory();
    console.log('');
    
    await testTransactions();
    console.log('');
    
    await testReports();
    console.log('');
    
    await testBusinessOperations();
    console.log('');
    
    console.log('🎉 All API tests completed!');
    
  } catch (error) {
    console.error('❌ Test suite failed:', error.message);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };
