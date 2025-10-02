#!/usr/bin/env node

/**
 * Database Setup Script for Tea Shop
 * This script helps set up the PostgreSQL database with schema and seed data
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Database configuration
const dbConfig = {
  user: process.env.PGUSER || process.env.PSQL_USER || 'postgres',
  host: process.env.PGHOST || process.env.PSQL_HOST || 'localhost',
  database: process.env.PGDATABASE || process.env.PSQL_DATABASE || 'tea_shop_db',
  password: process.env.PGPASSWORD || process.env.PSQL_PASSWORD || 'password',
  port: process.env.PGPORT || process.env.PSQL_PORT || 5432,
  ssl: process.env.SSL_MODE === 'true' ? { rejectUnauthorized: false } : false
};

async function setupDatabase() {
  const pool = new Pool(dbConfig);
  
  try {
    console.log('🚀 Starting database setup...');
    
    // Read and execute schema
    console.log('📋 Creating database schema...');
    const schemaSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✅ Schema created successfully');
    
    // Read and execute seed data
    console.log('🌱 Seeding database with initial data...');
    const seedSQL = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
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

// Run setup if this script is executed directly
if (require.main === module) {
  setupDatabase();
}

module.exports = { setupDatabase };
