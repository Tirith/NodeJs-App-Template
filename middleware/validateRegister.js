exports.validationResult = { body, validationResult } = require('express-validator');

const validateRules = [
    body('email').trim().isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 2 }),
    body('lastname').isLength({ min: 2 })

]

const validateRegister = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({
        [err.param]: err.msg
    }))


    res.render("./auth/register", { error: 'Popraw formularz' });
    console.log(extractedErrors)
}


module.exports = {
    validateRules,
    validateRegister,
}