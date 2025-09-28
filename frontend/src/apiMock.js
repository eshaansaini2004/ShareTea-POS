// Mock API service that replaces the real backend API calls
// This allows the frontend to work without a backend database

import { mockApi } from './mockData.js';

// Mock weather data
const mockWeatherData = {
  main: {
    temp: 72,
    feels_like: 75,
    humidity: 65,
    pressure: 1013,
    temp_min: 68,
    temp_max: 76
  },
  weather: [{
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }],
  wind: {
    speed: 5.2,
    deg: 180
  },
  clouds: {
    all: 10
  },
  sys: {
    country: "US",
    sunrise: 1640000000,
    sunset: 1640040000
  },
  name: "Houston",
  coord: {
    lat: 29.7604,
    lon: -95.3698
  }
};

// Helper function to create headers (for compatibility)
// eslint-disable-next-line no-unused-vars
const getHeaders = () => {
    return {
        "Content-Type": "application/json",
        "X-API-Key": "mock-api-key",
    };
};

// Mock API functions that match the real API structure
export const fetchProducts = async () => {
    try {
        return await mockApi.fetchProducts();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const createTransaction = async (transactionData) => {
    try {
        return await mockApi.createTransaction(transactionData);
    } catch (error) {
        console.error("Error creating transaction:", error);
        throw error;
    }
};

export const fetchTransactions = async () => {
    try {
        return await mockApi.fetchTransactions();
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        return await mockApi.createProduct(productData);
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    try {
        return await mockApi.updateProduct(id, productData);
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        return await mockApi.deleteProduct(id);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export const fetchInventory = async () => {
    try {
        return await mockApi.fetchInventory();
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
};

export const createInventory = async (inventoryData) => {
    try {
        return await mockApi.createInventory(inventoryData);
    } catch (error) {
        console.error('Error creating inventory:', error);
        throw error;
    }
};

export const updateInventory = async (id, inventoryData) => {
    try {
        return await mockApi.updateInventory(id, inventoryData);
    } catch (error) {
        console.error('Error updating inventory:', error);
        throw error;
    }
};

export const fetchXReport = async () => {
    try {
        return await mockApi.fetchXReport();
    } catch (error) {
        console.error('Error fetching X-report:', error);
        throw error;
    }
};

export const fetchZReport = async () => {
    try {
        return await mockApi.fetchZReport();
    } catch (error) {
        console.error('Error fetching Z-report:', error);
        throw error;
    }
};

export const fetchInventoryUsage = async (startDate, endDate) => {
    try {
        return await mockApi.fetchInventoryUsage(startDate, endDate);
    } catch (error) {
        console.error('Error fetching inventory usage data:', error);
        throw error;
    }
};

export const fetchSalesReport = async (startDate, endDate) => {
    try {
        return await mockApi.fetchSalesReport(startDate, endDate);
    } catch (error) {
        console.error('Error fetching sales report data:', error);
        throw error;
    }
};

export const fetchWeather = async (city = 'Houston', units = 'imperial') => {
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Return mock weather data
        return {
            ...mockWeatherData,
            name: city,
            main: {
                ...mockWeatherData.main,
                temp: units === 'metric' ? 22 : 72, // Convert to Celsius if metric
                feels_like: units === 'metric' ? 24 : 75
            }
        };
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw new Error("Could not fetch weather data.");
    }
};

export const closeBusinessDay = async () => {
    try {
        return await mockApi.closeBusinessDay();
    } catch (error) {
        console.error('Error closing business day:', error);
        throw error;
    }
};
