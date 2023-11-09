// Install required packages
// npm install express mongoose cors

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/petsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const Pet = mongoose.model('Pet', petSchema);

app.get('/pets/:type', async (req, res) => {
  const { type } = req.params;
  try {
    const pets = await Pet.find({ type });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
