const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('yashu_db', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error('Error: ' + err));

module.exports = sequelize;