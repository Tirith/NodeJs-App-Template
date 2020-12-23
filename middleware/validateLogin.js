exports.logged = function(req, res, next) {

    if (req.session.logged == true) {
        console.log("\x1b[32m", 'Logowanie ok')
        next()
    } else {
        console.log('Logowanie nie ok')
        res.redirect('/login');
    }

}