const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));     // app.use(...) → middleware ko globally use karna  , express.urlencoded() → form data ko parse karna , extended: true → nested objects ko support karna
app.use(cookieParser());       // cookieParser() → cookies ko parse karna mtlb cookies se data ko access karna


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);



module.exports = app;