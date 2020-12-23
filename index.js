const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash')


const router = require('./routes/index');
const hbs = require('hbs');
const { nextTick } = require('process');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(session({
    secret: 'Tirith',
    saveUninitialized: true,
    resave: true
}));


app.use(express.static('public'))

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.authUser = req.session.user;
    next()
})

app.use(flash());
app.use('/', router)

app.use((req, res) => {
    res.render('nopage', {})
})


module.exports = app;