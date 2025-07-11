// Import important modules
import express from "express";
import { createAnnouncement, deleteAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncement } from "../controllers/company_announcement.js";

// Create router instance
const router=express.Router();


//  Get routes
router.get('/get-all-announcements',getAllAnnouncements);
router.get('/get-announcement/:id',getAnnouncementById);

// Post routes
router.post('/create-announcement',createAnnouncement);

// Put routes
router.put('/update-announcement/:id', updateAnnouncement);

// Delete routes
router.delete('/delete-announcement/:id', deleteAnnouncement);

// Export the router
export default router;
