// Import important modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import companyAnnouncementsRouter from './routes/company_announcements_route.js';

// Load environment variables from .env file
dotenv.config();

// Instance of express app
const app = express();

// Application level middlewares
app.use(express.json());
app.use(cors());

// app routes
app.use('/api/', companyAnnouncementsRouter);

// app listening on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
