const db = require('../../db');
const session = require('express-session');
const hashedPassword = require('password-hash');
const { locals } = require('../..');

exports.registerPage = (req, res) => {
    res.render('./auth/register', {
        error: req.flash('form-error'),
        success: req.flash('form-success'),
        name: req.flash('form-name'),
        lastname: req.flash('form-lastname'),
    });
}

exports.loginPage = (req, res) => {
    res.render('./auth/login', { error: req.flash('form-error') });
}

exports.logOut = (req, res) => {
    req.session.destroy(function(err) {
        console.log('Wylogowywanie')

        res.redirect('/')
    })


}

exports.register = (req, res) => {



    db.User.find({ email: req.body.email }).exec(function(err, data) {

        if (data.length) {
            req.flash('form-error', 'Taki e-mail już istnieje')
            req.flash('form-name', req.body.name)
            req.flash('form-lastname', req.body.lastname)
            res.redirect("/register");
        } else {
            let user = new db.User({
                email: req.body.email,
                password: hashedPassword.generate(req.body.password),
                name: req.body.name,
                lastname: req.body.lastname
            })

            user.save().then(() => {
                main(req.body.email).catch(console.error);
                res.redirect('/register');
            }).catch((error) => {
                req.flash('form-success', 'Rejestracja udana')
                res.redirect("/register");
            });
        }
    })
}

exports.login = (req, res) => {



    db.User.find({ email: req.body.email }).exec(function(err, data) {

        if (data.length) {


            if (hashedPassword.verify(req.body.password, data[0].password)) {
                console.log("\x1b[32m", `${data[0].email} login successful`)
                req.session.logged = true;
                req.session.user = data[0]
                res.locals.authUser = data[0];
                res.render("./app/index");
            } else {
                req.flash('form-error', 'Błędny login lub hasło')
                res.redirect("/login");

            }
        } else {

            req.flash('form-error', 'Błędny login lub hasło')
            res.redirect("/login");

        }
    })
}