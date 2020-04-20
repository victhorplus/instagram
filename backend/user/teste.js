const model = require('./userModel');

result = async () => {
    console.log('Rodando teste')
    console.log(await model.auth('teste16', '1234566'));
}
result()