// improting important modules
import createMySQLConnection from '../config/db.js';
import mapCategoryToValue from '../utils/categoryMapping.js';

// create data
const createAnnouncement = async (req, res) => {
    try {
        // get data from request body
        const { title, description, category } = req.body;

        // if any field is empty, return 400
        if (!title || !description || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Define valid categories
        const validCategories = ['policy', 'compliance', 'it', 'event'];

        // if the category is not valid, return 400
        if (!validCategories.includes(category)) {
            return res.status(400).json({ message: 'Invalid category' });
        }

        const categoryValue = mapCategoryToValue(category);

        // insert data into database
        const connection = await createMySQLConnection();
        const [result] = await connection.execute(
            'INSERT INTO announcements (title, description, category) VALUES (?, ?, ?)',
            [title, description, categoryValue]
        );

        // if insert is not successful, return 500
        if (result.affectedRows === 0) {
            return res.status(500).json({ message: 'Failed to create announcement' });
        }

        // if insert is successful, return 201
        return res.status(201).json({ message: 'Announcement created', id: result.insertId });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// read all data
const getAllAnnouncements = async (req, res) => {
    try {
        // get all data from database
        const connection = await createMySQLConnection();
        const [rows] = await connection.execute('SELECT * FROM announcements ORDER BY created_at DESC');

        // if rows are empty
        if (rows.length == 0) return res.status(200).json("No announcements");

        // return data
        return res.status(200).json(rows);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// read data by id 
const getAnnouncementById = async (req, res) => {
    try {
        // if id is not provided, return 400
        if (!req.params.id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        // get data from database by id
        const connection = await createMySQLConnection();
        const [rows] = await connection.execute('SELECT * FROM announcements WHERE id = ?', [req.params.id]);

        // If rows is empty, return 404
        if (rows.length === 0) return res.status(404).json({ message: 'Announcement not found' });

        // else return row
        return res.status(200).json(rows[0]);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// update data
const updateAnnouncement = async (req, res) => {
    try {
        // if id is not provided, return 400
        if (!req.params.id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        // get data from request body
        const { title, description, category } = req.body;

        console.log(req.body);
        // if any field is empty, return 400
        if (!title || !description || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Define valid categories
        const validCategories = ['policy', 'compliance', 'it', 'event'];


        // if the category is not valid, return 400
        if (!validCategories.includes(category)) {
            return res.status(400).json({ message: 'Invalid category' });
        }

        const categoryValue = mapCategoryToValue(category);


        // update data in database
        const connection = await createMySQLConnection();
        const [result] = await connection.execute(
            'UPDATE announcements SET title = ?, description = ?, category = ? WHERE id = ?',
            [title, description, categoryValue, req.params.id]
        );

        // if update is not successful, return 500
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Data not found' });
        }

        // if update is successful, return 200
        return res.status(200).json({ message: 'Data updated' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


// delete data
const deleteAnnouncement = async (req, res) => {
    try {
        // if id is not provided, return 400
        if (!req.params.id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        // check data exist in database
        const connection = await createMySQLConnection();
        const [result] = await connection.execute('SELECT * FROM announcements WHERE id = ?', [req.params.id]);

        // If result is empty, return 404
        if (result.length === 0) return res.status(404).json({ message: 'Announcement not found' });

        // delete data from the databse
        await connection.execute('DELETE FROM announcements WHERE id = ?', [req.params.id]);

        // return data successfully
        return res.status(200).json({ message: 'Announcement deleted' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// export controller functions
export { createAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncement, deleteAnnouncement }