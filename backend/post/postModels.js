const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    owner: {type: String, required: true },
    image: { type: String, required: true },
    legend: { type: String },
    like: { type: [String], default: undefined },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
})

const Post = mongoose.model('Post', postSchema);
const model = {};

model.getAll = async () => {
    var post = await Post.find({});
    return post;
}

model.getByNick = async (owner) => {
    var posts = await Post.find({ owner })
    return posts;
}

model.getById = async (id) => {
    try{
        var post = await Post.findById(id);
        return post;
    }catch(err){
        return {};
    }
}

model.getByDate = async (dataInicial, dataFinal) => {
    const posts = await Post.find({
        createdAt: {$gte: dataInicial, $lte: dataFinal}
    });
    return posts;
}

model.create = async (owner, legend, image) => {
    var post = await Post.create({ owner, image, legend });
    return post;
}

model.edit = async (id, legend, image) => {
    var post = await Post.findByIdAndUpdate(id, {legend, image}, {new: true});
    return post;
}

module.exports = model;

async function teste(){
    var result = await model.edit("5eaecdc7fdf39e181c6b332d", 'legenda04 - 03(1)', 'teste04_1588514247590_Captura de Tela (1).png');
    console.log(result);
}

 teste();