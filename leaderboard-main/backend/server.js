const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leaderboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Mongoose schema and model
const teamSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  score: Number,
  totalGamesPlayed: Number,
});

const Team = mongoose.model('Team', teamSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json({ teams });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example route to add a new team
app.post('/teams', async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.status(201).json({ message: 'Team created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
