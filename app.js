const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/user');
const sequelize = require('./database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 👇 Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// 👇 Optional: redirect root to index.html if needed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/users', userRoutes);

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
