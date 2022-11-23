const Book = require("../models");
const db = require("./db");

async function seed() {
    await db.sync({ force: true})

    await Book.bulkCreate([
        {
            author: 'Maximus the Confessor',
            title: 'On the Ecclesiastical Mystagogy'
        }, 
        {
            author: 'Plato',
            title: 'Republic'
        },
        {
            author: 'Aristotle',
            title: 'The Metaphysics'
        },
        {
            author: 'Pseudo-Dionysius',
            title: 'Mystical Theology'
        }
    ])
}

module.exports = seed