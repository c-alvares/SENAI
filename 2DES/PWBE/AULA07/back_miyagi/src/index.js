const Express = require('Express');
const cors = require('cors');

const routes = require('./routes.js');

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});