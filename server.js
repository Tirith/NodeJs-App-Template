const app = require('./index')
const port = 8080
app.set('port', process.env.PORT || port);

const server = app.listen(app.get('port'), () => {

    console.log("\x1b[32m", 'Server works!!!')
})