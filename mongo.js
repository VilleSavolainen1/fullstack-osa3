const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://Ville_Savolainen:${password}@cluster0.ukt9v.mongodb.net/fullstack?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name,
    number,
})

if (process.argv.length === 3) {
    Person.find({}).then((res) => {
        console.log('phonebook:')
        // eslint-disable-next-line no-shadow
        res.forEach((person) => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}
