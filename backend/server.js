const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/login-page');
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;


    const newUser = new User({ username, email, password });

    newUser.save()
        .then(savedUser => {
            res.status(200).json({ message: 'User saved successfully' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Error saving user' });
        });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
