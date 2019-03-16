const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport')
const cors = require('cors')
const path = require('path')
const url = require('./config/keys').mongoKey
const user = require('./routes/users')
const profile = require('./routes/profile')
const posts = require('./routes/posts')
const app = express()

//port number
const port = process.env.PORT || 8080;
//Connecting to the server
mongoose.connect('mongodb+srv://wazuddin:aman20@cluster0-lxuyx.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true })
    .then(console.log('Connected to database'))
    .catch(err => console.log(err))

//cors origin data fetching
app.use(cors())

//Passport Middleware
app.use(passport.initialize())
//Passport config
require('./config/passport')(passport)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/users', user)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.get('/', (req, res) => {
    res.send('Invalid end point')
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

//Listening to server at port 3000

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})