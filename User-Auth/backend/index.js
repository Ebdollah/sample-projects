// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); 
const User = require('./models/User');
const userRoutes = require('./routes/busers');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./authMiddleware'); // Import the middleware

// server.js (continued)
const mongoose = require('mongoose');
connectDB();

const app = express();

// mongoose.connect('mongodb+srv://ebdollah:mern-blog@blog.ojv5asz.mongodb.net/?retryWrites=true&w=majority')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the backend!');
// });

app.use('/api/users', userRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

