const model = require('./postModels');

const controller = {};

controller.getAll = async (req, res) => {
    var posts = await model.getAll();
    return res.json({posts});
}

controller.getByNick = async (req, res) => {
    const { nick } = req.params;
    const posts = await model.getByNick(nick);
    return res.json({ posts });
}

controller.getById = async (req, res) => {
    const { nick, id } = req.params;
    const post = await model.getById(id);
    return res.json({ post });
}

controller.getByDate = async (req, res) => {
    var dataInicial = (req.url+"").split("?")[1].split("&")[0].split("=")[1]+"T00:00:00";
    var dataFinal = (req.url+"").split("?")[1].split("&")[1].split("=")[1]+"T23:59:59";
    if(!dataInicial || !dataFinal) return res.json({ error: "Dados insuficientes" });
    const posts = await model.getByDate(dataInicial, dataFinal);
    return res.json(posts);
}

controller.create = async(req, res) => {
    const { nick, legend, image } = req.body;
    if (!nick || !image) return res.json({ error: 'Dados insuficientes' });
    const post = await model.create(nick, legend, image);
    return res.json({post});
}


controller.teste = async (req, res) => {
    // /teste?dataInicial=2020-01-01&dataFinal=2020-04-05
    var dataInicial = (req.url+"").split("?")[1].split("&")[0].split("=")[1]
    var dataFinal = (req.url+"").split("?")[1].split("&")[1].split("=")[1]
    return res.send(`Data Inicial: ${dataInicial}<br>Data Final: ${dataFinal}`);
}

module.exports = controller;