#!/usr/bin/env node

// Direct database setup for Railway
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Railway database connection details
const dbConfig = {
  user: 'postgres',
  host: 'blissful-radiance-production.up.railway.app',
  database: 'railway',
  password: 'GPmxnXIWKfhyMVhxxmnhElYrmdaGsEQo',
  port: 5432,
  ssl: { rejectUnauthorized: false }
};

async function setupDatabase() {
  const pool = new Pool(dbConfig);
  
  try {
    console.log('🚀 Starting database setup...');
    console.log('🔗 Connecting to Railway database...');
    
    // Test connection
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to Railway database');
    
    // Read and execute schema
    console.log('📋 Creating database schema...');
    const schemaSQL = fs.readFileSync(path.join(__dirname, 'backend/schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✅ Schema created successfully');
    
    // Read and execute seed data
    console.log('🌱 Seeding database with initial data...');
    const seedSQL = fs.readFileSync(path.join(__dirname, 'backend/seed.sql'), 'utf8');
    await pool.query(seedSQL);
    console.log('✅ Database seeded successfully');
    
    // Verify setup
    console.log('🔍 Verifying setup...');
    const productCount = await pool.query('SELECT COUNT(*) FROM products');
    const inventoryCount = await pool.query('SELECT COUNT(*) FROM inventory');
    
    console.log(`📊 Products created: ${productCount.rows[0].count}`);
    console.log(`📦 Inventory items created: ${inventoryCount.rows[0].count}`);
    
    console.log('🎉 Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupDatabase();
