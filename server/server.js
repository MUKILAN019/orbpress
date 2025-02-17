const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

//Load env variables
require('dotenv').config();

//middleware 
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use('/api', userRoutes);
app.use('/posts',postRoutes)
app.get('/', (req, res) => {
  res.send('Hello World ! This is a simple Node.js server.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
