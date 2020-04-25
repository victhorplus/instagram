const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config')
const userRoute = require('./user/userRoute');
const postRoute = require('./post/postRoutes');

const server_port = config.server_port;

app.use(cors());

// Body Parser
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Endpoints
app.get('/', (req, res) => {
    res.send({message: "Rota GET index"})
})

app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(server_port, () => {
    console.log(`Servidor rodando na porta: ${server_port}`)
})