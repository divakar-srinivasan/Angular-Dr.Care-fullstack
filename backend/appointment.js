const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/appointment-system');
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const appointmentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    selectedDoctor: String,
    selectedDate: String,
    selectedTime: String,
    message: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.use(bodyParser.json());

app.post('/api/appointment', (req, res) => {
    const { fullName, email, phone, selectedDoctor, selectedDate, selectedTime, message } = req.body;

    const newAppointment = new Appointment({ 
        fullName,
        email,
        phone,
        selectedDoctor,
        selectedDate,
        selectedTime,
        message
    });

    newAppointment.save()
        .then(savedAppointment => {
            res.status(200).json({ message: 'Appointment saved successfully' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error saving appointment' });
        });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
