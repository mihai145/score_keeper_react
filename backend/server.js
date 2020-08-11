const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

const teamRoutes = require('./routes/TeamRoutes');
const matchRoutes = require('./routes/MatchRoutes');

app.use('/team', teamRoutes);
app.use('/match', matchRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started listening to port ${port}`));