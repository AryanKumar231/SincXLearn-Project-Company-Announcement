// importing neccessary modules
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


// Initialize the database and create the tables
const initDB = async () => {
  try {
    // create a connection 
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.SQL_PASS, // Use your MySQL root password
    });

    // Create database
    await connection.query(`CREATE DATABASE IF NOT EXISTS company_announcements`);

    console.log("Database created or already exists");

    // Connect to that database
    await connection.changeUser({ database: 'company_announcements' });

    // Create announcements table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS announcements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category ENUM('Policy Update', 'Compliance Alert', 'IT Notice', 'Event Notification') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `;

    
    // Execute the query to create the table
    await connection.query(createTableQuery);
    console.log("Table created or already exists");

    // close the connection
    await connection.end();
  } catch (err) {
    console.error("Error initializing DB:", err.message);
  }
};

// Call the function to initialize the database
initDB();
