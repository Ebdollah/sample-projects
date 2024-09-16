#Initialize a New Node.js Project
npm init -y

#Install Required Packages
npm install express mongoose body-parser cors bcryptjs jsonwebtoken

express: Web framework for Node.js.
mongoose: MongoDB object modeling tool.
body-parser: Middleware to parse incoming request bodies.
cors: Middleware to enable CORS (Cross-Origin Resource Sharing).
bcryptjs: Library to hash passwords.
jsonwebtoken: Library to generate and verify JSON Web Tokens for authentication.

#Set Up Express Server
const express = require('express');
//Importing the Express.js library to create a web server.

const cors = require('cors');
//Importing CORS middleware for handling cross-origin requests.

const app = express();
//Initializing an Express application instance.

app.use(cors());
app.use(express.json());
//Using CORS middleware for cross-origin requests and enabling JSON parsing for request bodies.

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});
//Defining a root route that sends a welcome message.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
//Setting the server port and starting the Express server.

#Go to https://cloud.mongodb.com/v2#/org/000000000000000000000000/projects 
>Click New Project
>Create New Project
>Create Deployment
>edit username and password
>create user
>finish and close
>go to connect and click drivers
>get your connection string
-------------------------------------------------------------------------
#then
create a file db.js
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('Connection-String', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
-----------------------------------------------------------------------------
create folder "models"
inside it we will make models and schemas
lets say 
User.js
// models/User.js
const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
-------------------------------------------------------------
now inside index.js put
const connectDB = require('./db'); // Adjust the path accordingly
const User = require('./models/User');

connect db using:
connectDB();

const app = express();
--------------------------------------------------------------
Now create folder routes inside it create file, users.js
now create routes inside it like:
// backend/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
});

// backend/routes/users.js

// Add more routes as needed (e.g., update user, delete user, etc.)

module.exports = router;

Now add following code inside index.js:
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);


------------------------------------------------------------

Now checking your connectivity using Postman/Thunder Client
1. Create a New Request:
Set the HTTP method to POST.
Enter the URL for your registration endpoint. If you are using the example provided, the URL would be http://localhost:5000/api/users/register (assuming your server is running on port 5000).

2. Set Headers:
Click on the Headers tab.
Add a key-value pair:
Key: Content-Type
Value: application/json

3. Set Request Body:
Click on the Body tab.
Select raw and JSON (application/json) from the dropdown menu.
Enter the user details you want to register. For example:
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

----------------------------------------------------------------------------
So now added "handleSubmit" function in signup and login components. checkout pages


-------------------------------------------------------------------------
#Now Set up user authentication using bcryptjs for password hashing and jsonwebtoken for token-based authentication.

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
