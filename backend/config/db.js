// Import important modules
import mysql from 'mysql2/promise';


const createMySQLConnection = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: 'Enter_Your_Pass_Here', // Use your MySQL root password, i don't know why process.env.SQL_PASS is not working so that's why i am using this
        database: process.env.DB_NAME,
    });
    return connection;
};

// Export the connection
export default createMySQLConnection;
