require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'exercicio-6.1',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.PORT || 3002,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};