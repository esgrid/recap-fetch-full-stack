const express = require('express')
const app = express()
const cors = require('cors')
const Book = require('./models')
const seed = require('./db/seed')
const PORT = 5000

// processing json and allowing cors
app.use(express.json())
app.use(cors())

// get request
app.get('/books', async (req, res) => {
    await seed()
    res.status(200).send({ books: await Book.findAll() })
})

// post request
app.post('/books', async (req, res) => {
    await Book.create(req.body)
    res.status(200).send({ books: await Book.findAll() })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})