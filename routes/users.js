const express = require('express')
const bodyParser = require('body-parser')
const gravatar = require('gravatar')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../models/User')
const key = require('../config/keys').secretKey
const registerValidation = require('../validation/register')
const loginValidation = require('../validation/login')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//@route GET api/users/test
//@desc Tests user Route
//@access Public
router.get('/test', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json({ msg: 'Working Sucessfully' })
});

//@route POST api/users/register
//@desc Registering User
//@access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = registerValidation(req.body)
    if (isValid == false) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // res.statusCode = 400
                // res.setHeader('Content-Type', 'application/json')
                errors.email = 'Email already Exist'
                return res.status(400).json(errors)
            }
            else {
                const avatar = gravatar.url(req.body.email,
                    {
                        s: '150', //size
                        r: 'pg', //rating
                        d: 'mm' //default
                    })
                const newUser = User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    profilepicture: avatar,
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) { return res.status(400).json(err) }
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.status(201).json(user))
                            .catch(err => console.log(err))
                    })
                })
            }

        })
})

//@route POST api/users/login
//@desc Login User
//@access Public
router.post('/login', (req, res) => {
    const { errors, isValid } = loginValidation(req.body)
    if (isValid == false) {
        return res.status(400).json(errors)
    }
    email = req.body.email
    password = req.body.password
    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User Not Found'
                return res.status(404).json(errors)
            }
            bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) {
                        errors.password = 'Password Incorrect'
                        return res.status(400).json(errors)
                    }
                    else {
                        //Password match
                        const payload = {
                            id: user._id,
                            name: user.name,
                            profilepicture: user.profilepicture
                        }
                        jwt.sign(
                            payload,
                            key,
                            { expiresIn: 3600 },
                            (err, token) => {
                                return res.status(200).json
                                    ({
                                        success: true,
                                        token: 'Bearer ' + token
                                    })
                            })
                    }
                })
        })
})

router.get('/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        return res.json({
            id: req.user._id,
            email: req.user.email,
            name: req.user.name
        })
    })
module.exports = router