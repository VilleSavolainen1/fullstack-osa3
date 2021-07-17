const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

morgan.token('person', function getPerson(req){
    return JSON.stringify(req.body)
})

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

app.get('/api/persons', (req, res) => {
    res.json(persons)
})


app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people<br/><br/>${Date()}`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * (1000 - persons.length + 1) + persons.length)
}

app.post('/api/persons', (req, res) => {
    const body = req.body
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

    res.json(person)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})