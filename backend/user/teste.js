const model = require('./userModel');

result = async () => {
    console.log('Rodando teste')
    console.log( (await model.auth('teste16', '123456')).nick );
}
result()