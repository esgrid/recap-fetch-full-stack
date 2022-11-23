const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

 class Book extends Model {}

 Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
 },
 {
    sequelize: db
 })

 module.exports = Book