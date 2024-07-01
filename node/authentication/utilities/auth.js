const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../utilities/jwt')

exports.auth = async (req, res, next) => {
    console.log(req.headers)
    let BearerToken = req.headers.authorization
    if (!BearerToken) {
        res.json({
            status: 'failed',
            msg: 'no token received'
        })
    }
    else {
        try {
            let token = BearerToken.split(' ')[1]
            let decode = jwt.verify(token, SECRET_KEY)
            req.user = decode.email
            next()
        } catch (error) {
            res.json({
                status: 'failed',
                msg: `please login again \n ${error.message}`

            })

        }
    }



}