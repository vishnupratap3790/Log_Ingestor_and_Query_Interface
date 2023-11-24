const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logRoutes = require('./routes/logRoutes.js');
require('dotenv').config({path:'backend/config.env'});

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((data)=>{
  console.log(`mongodb connected with server ${data.connection.host}`);
});

app.use('/logs', logRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
