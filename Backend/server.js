// Backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Ethio-Digital Excellence API is running...');
});

// Barattoota galchuuf (Endpoint)
app.post('/api/students', async (req, res) => {
    const { name, phone, email, gender, course, city } = req.body;
    
    const { data, error } = await supabase
        .from('students')
        .insert([{ name, phone, email, gender, course, city }]);

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: 'Student registered successfully', data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
