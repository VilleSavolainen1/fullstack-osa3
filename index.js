require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()
const cors = require('cors')
const Person = require('./models/person')

// eslint-disable-next-line consistent-return
const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}

morgan.token('person', (req) => JSON.stringify(req.body))

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then((person) => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
        .catch((error) => {
            console.log(error)
            res.status(500).end()
        })
})

app.get('/info', (req, res) => {
    Person.find({}).then((person) => {
        res.send(`Phonebook has info for ${person.length} people<br/><br/>${Date()}`)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then((person) => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch((error) => next(error))
})

app.post('/api/persons', (req, res) => {
    const { body } = req
    const person = new Person({
        name: body.name,
        number: body.number,
    })
    person.save().then((saved) => {
        res.json(saved)
    }).catch((err) => {
        res.status(400).send(err.message)
    })
    /*
    const personName = persons.find(person => person.name === body.name)
    if (personName) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    res.json(person) */
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch((error) => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const { body } = req
    console.log(req.body)
    const person = {
        name: body.name,
        number: body.number,
    }
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then((updatePerson) => {
            res.json(updatePerson)
        })
        .catch((error) => next(error))
})

app.use(errorHandler)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
