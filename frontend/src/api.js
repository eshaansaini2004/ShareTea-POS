// contains all api functions for communicating with the backend server

// load environment variables for api configuration
const API_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, '') || 'https://blissful-radiance-production.up.railway.app'; // Remove trailing slash
const API_KEY = process.env.REACT_APP_API_KEY;
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

console.log('🔧 Environment check:');
console.log('REACT_APP_API_URL raw:', process.env.REACT_APP_API_URL);
console.log('API_URL processed:', API_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Use mock API if no backend is available
const USE_MOCK_API = !API_URL;

let mockModulePromise = null;
const getMockModule = async () => {
    if (!mockModulePromise) {
        mockModulePromise = import('./apiMock.js');
    }
    return await mockModulePromise;
};

// helper function to create headers with content type and optional api key
const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };
    
    // Only add API key if it's available
    if (API_KEY) {
        headers["X-API-Key"] = API_KEY;
    }
    
    return headers;
};

export const fetchProducts = async () => {
    console.log('🔍 fetchProducts called');
    console.log('API_URL:', API_URL);
    console.log('API_URL type:', typeof API_URL);
    console.log('API_URL length:', API_URL ? API_URL.length : 'undefined');
    console.log('USE_MOCK_API:', USE_MOCK_API);
    console.log('Full URL will be:', `${API_URL}/api/products`);
    
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        console.log('📦 Using mock data');
        const mock = await getMockModule();
        return await mock.fetchProducts();
    }

    console.log('🌐 Making real API call to:', `${API_URL}/api/products`);
    try {
        const response = await fetch(`${API_URL}/api/products`, {
            headers: getHeaders(),
        });

        console.log('📡 API Response status:', response.status);
        console.log('📡 API Response headers:', response.headers);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ API Error Response:', errorText);
            throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
        }
        
        const responseText = await response.text();
        console.log('📡 Raw response:', responseText.substring(0, 200) + '...');
        
        // Check if response is HTML instead of JSON
        if (responseText.trim().startsWith('<!doctype') || responseText.trim().startsWith('<html')) {
            console.error('❌ Received HTML instead of JSON:', responseText.substring(0, 500));
            throw new Error('Received HTML response instead of JSON. Check API URL configuration.');
        }
        
        const data = JSON.parse(responseText);
        console.log('✅ Products loaded:', data.length, 'items');
        return data;
    }
    catch (error) {
        console.error("❌ Error fetching products:", error);
        throw error;
    }
};

export const createTransaction = async (transactionData) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.createTransaction(transactionData);
    }

    try {
        const response = await fetch(`${API_URL}/api/transactions`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
            let errorBody = null;
            try {
                errorBody = await response.json();
            }
            catch (e) { /* ignore parsing error */
            }
            const errorMessage = errorBody?.error || `Network response was not ok: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error creating transaction:", error);
        throw error;
    }
};

export const fetchTransactions = async () => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchTransactions();
    }

    try {
        const response = await fetch(`${API_URL}/api/transactions`, {
            headers: getHeaders(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Transactions API Error Response:', errorText);
            throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
        }
        
        const responseText = await response.text();
        console.log('📡 Transactions raw response:', responseText.substring(0, 200) + '...');
        
        // Check if response is HTML instead of JSON
        if (responseText.trim().startsWith('<!doctype') || responseText.trim().startsWith('<html')) {
            console.error('❌ Received HTML instead of JSON for transactions:', responseText.substring(0, 500));
            throw new Error('Received HTML response instead of JSON. Check API URL configuration.');
        }
        
        const transactions = JSON.parse(responseText);
        // the backend now sorts transactions by purchase_date and customer_transaction_num
        // but we'll keep this sort to ensure backward compatibility
        if (transactions.length > 0) {
            if (transactions[0].purchase_date) {
                // sort by purchase date if available (newest first)
                return transactions;  // already sorted by backend
            }
            else if (transactions[0].customer_transaction_num !== undefined) {
                // fallback to sorting by transaction number
                return transactions.sort((a, b) => b.customer_transaction_num - a.customer_transaction_num);
            }
        }
        return transactions;

    }
    catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
}

export const createProduct = async (productData) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.createProduct(productData);
    }

    try {
        const response = await fetch(`${API_URL}/api/products`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.updateProduct(id, productData);
    }

    try {
        const response = await fetch(`${API_URL}/api/products/${id}`, {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.deleteProduct(id);
    }

    try {
        const response = await fetch(`${API_URL}/api/products/${id}`, {
            method: 'DELETE',
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export const fetchInventory = async () => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchInventory();
    }

    try {
        const response = await fetch(`${API_URL}/api/inventory`, {
            headers: getHeaders(),
        });
        if (!response.ok) {
            // error handling
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching inventory:', error);
        throw error; // re-throw to be caught by the component
    }
};

export const createInventory = async (inventoryData) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.createInventory(inventoryData);
    }

    try {
        const response = await fetch(`${API_URL}/api/inventory`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(inventoryData), // sends the payload as received
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error creating inventory:', error);
        throw error;
    }
};

export const updateInventory = async (id, inventoryData) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.updateInventory(id, inventoryData);
    }

    try {
        const response = await fetch(`${API_URL}/api/inventory/${id}`, {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(inventoryData), // sends the payload as received
        });
        if (!response.ok) {
            let errorBody = null;
            try {
                errorBody = await response.json();
            }
            catch (e) { /* ignore parsing error */
            }
            const errorMessage = errorBody?.error || `Network response was not ok: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error updating inventory:', error);
        throw error;
    }
};

export const fetchXReport = async () => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchXReport();
    }

    try {
        const response = await fetch(`${API_URL}/api/reports/x-report`, {
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch X-report');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching X-report:', error);
        throw error;
    }
};

export const fetchZReport = async () => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchZReport();
    }

    try {
        const response = await fetch(`${API_URL}/api/reports/z-report`, {
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Z-report');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching Z-report:', error);
        throw error;
    }
};

export const fetchInventoryUsage = async (startDate, endDate) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchInventoryUsage(startDate, endDate);
    }

    try {
        const response = await fetch(`${API_URL}/api/reports/inventory-usage?startDate=${startDate}&endDate=${endDate}`, {
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch inventory usage data');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching inventory usage data:', error);
        throw error;
    }
};

export const fetchSalesReport = async (startDate, endDate) => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.fetchSalesReport(startDate, endDate);
    }

    try {
        const response = await fetch(`${API_URL}/api/reports/sales?startDate=${startDate}&endDate=${endDate}`, {
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch sales report data');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching sales report data:', error);
        throw error;
    }
};


/**
 * Fetches current weather data from OpenWeatherMap.
 * @param {string} city - The city name (e.g., 'Houston').
 * @param {string} units - Units for temperature ('metric' for Celsius, 'imperial' for Fahrenheit).
 * @returns {Promise<object>} - The weather data object.
 */
export const fetchWeather = async (city = 'Houston', units = 'imperial') => {
    console.log('Weather API Key available:', !!OPENWEATHER_API_KEY);
    console.log('Weather API Key (first 10 chars):', OPENWEATHER_API_KEY ? OPENWEATHER_API_KEY.substring(0, 10) + '...' : 'None');
    
    // Check if we have a valid API key (not the placeholder)
    if (OPENWEATHER_API_KEY && OPENWEATHER_API_KEY !== 'your_weather_api_key_here' && OPENWEATHER_API_KEY.length > 10) {
        try {
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`;
            console.log('Fetching weather from:', weatherApiUrl);
            const response = await fetch(weatherApiUrl);

            if (!response.ok) {
                const errorData = await response.json();
                console.error("OpenWeatherMap API Error:", errorData);
                throw new Error(`Weather API request failed: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`);
            }
            const data = await response.json();
            console.log('Real weather data received:', data);
            return data;
        }
        catch (error) {
            console.error("Real weather API failed, falling back to mock data:", error);
            // Fall through to mock data
        }
    } else {
        console.log("No valid OpenWeatherMap API key configured, using mock weather data");
    }

    // Fallback to mock data
    console.log('Using mock weather data for', city);
    const mock = await getMockModule();
    return await mock.fetchWeather(city, units);
};

export const closeBusinessDay = async () => {
    // Use mock data if no backend is available
    if (USE_MOCK_API) {
        const mock = await getMockModule();
        return await mock.closeBusinessDay();
    }

    try {
        const response = await fetch(`${API_URL}/api/business/close`, {
            method: 'POST',
            headers: getHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to close business day');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error closing business day:', error);
        throw error;
    }
};