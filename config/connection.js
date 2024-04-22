require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize("ecommerce_db", "postgres", "korra", {
      host: "localhost",
      dialect: "postgres",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
