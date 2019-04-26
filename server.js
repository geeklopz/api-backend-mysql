const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

// Teste of INSERT
User.create({ 
    name: 'user', 
    email: 'email@mail.com', 
    password: '123456' 
});

app.use(require('./routes'))

app.listen(3333, () => {
    console.log('Server ON')
})