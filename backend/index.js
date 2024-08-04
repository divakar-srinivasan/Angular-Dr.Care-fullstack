const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
var routes=require('./routes');


mongoose.connect('mongodb://localhost:27017/login-page');
const db=mongoose.connection;
db.on('error', err => console.error('MongoDB connection error:', err));
db.once('open',()=>{
    console.log('connected to database');
})

app.listen(8086, () => console.log('Listening on port http://localhost:8086')); 

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));
app.use(express.json());
app.use(routes);
