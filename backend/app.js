const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config')
const userRoute = require('./user/userRoute');
const indexRoute = require('./indexRoute');

const server_port = config.server_port;

app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Endpoints
app.use('/', indexRoute);

app.use('/user', userRoute);

app.listen(server_port, () => {
    console.log(`Servidor rodando na porta: ${server_port}`)
})