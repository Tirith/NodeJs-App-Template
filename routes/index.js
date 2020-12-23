const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController')
const AuthControllers = require('../controllers/Auth/AuthControllers')
const { validateRules, validateRegister } = require('../middleware/validateRegister')
const authValid = require('../middleware/validateLogin')





router.get('/', PagesController.home)
router.get('/index', authValid.logged, PagesController.index)
router.get('/login', AuthControllers.loginPage)
router.post('/logout', AuthControllers.logOut)
router.get('/register', AuthControllers.registerPage)
router.post('/register', validateRules, validateRegister, AuthControllers.register)
router.post('/login', AuthControllers.login)






module.exports = router;