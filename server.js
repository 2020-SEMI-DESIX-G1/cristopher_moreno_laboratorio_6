//MODULES
const app = require('./app');
const PORT = 3000

//APP LISTEN:
app.listen(`${PORT}`, () => console.log(`Running @ ${PORT}`))