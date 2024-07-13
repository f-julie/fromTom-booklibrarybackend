const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Book;

