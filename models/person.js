const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})
    .then(() => {
        console.log('connected to MongoDb')
    })
    .catch((error) => {
        console.log('error connecting to MongoDb', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String, required: true, unique: true, uniqueCaseInsensitive: true, minLength: 3,
    },
    number: { type: String, required: true, minLength: 8 },
})
personSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })

module.exports = mongoose.model('Person', personSchema)
