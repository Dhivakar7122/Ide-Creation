const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./Modelcon');
const Career = require('./Career');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb://127.0.0.1:27017/Contactus';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/api/contact', async (req, res) => {
    try {
        const { name, phoneNumber, email, description } = req.body;
        const newContact = new Contact({ name, phoneNumber, email, description });
        await newContact.save();
        res.status(201).json({ message: 'Contact details submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact details:', error.message);
        res.status(500).json({ error: 'Failed to submit contact details' });
    }
});
app.post('/api/career', async (req, res) => {
    try {
        const { name, email, phoneNumber } = req.body;

        const newCareer = new Career({ name, email, phoneNumber });
        await newCareer.save();
        res.status(201).json({ message: 'Career application submitted successfully' });
    } catch (error) {
        console.error('Error submitting career application:', error.message);
        res.status(500).json({ error: 'Failed to submit career application' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
