const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const {SECRET_KEY}=require('../utilities/jwt.js')

exports.signup = async (req, res) => {
    let { email, password } = req.body
    password = await bcrypt.hash(password, 10)

    try {
        await User.create({ email, password })
        res.status(201).json({
            status: 'success',
            msg: 'user created'
        })
    } catch (error) {
        res.status(400).json({
            status: 'success',
            msg: error.message
        })
    }

}

exports.login = async (req, res) => {
    let { email, password } = req.body

    try {
        let user = await User.findOne({ email: email })
        if (user) {
            if ( await bcrypt.compare(password, user.password)) {
                let token=jwt.sign({email},SECRET_KEY)
                res.status(200).json({
                    status: 'success',
                    msg: 'user authenticated',
                    token:token
                })
            } else {
                res.status(400).json({
                    status: 'error',
                    msg: 'not a valid password'
                })
            }

        } else {
            res.status(400).json({
                status: 'error',
                msg: 'no user found'
            })
        }

    } catch (error) {
        res.status(400).json({
            status: 'error',
            msg: error.message
        })
    }

}