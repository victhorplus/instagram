const env = (process.env.NODE_ENV || 'dev').toLowerCase();

const config = () => {
    switch(env){
        case 'dev':
        return {
            server_port: 3000,
            dbr_sgbd: 'postgres',
            dbr_host: 'localhost',
            dbr_name: 'instagram',
            dbr_user: 'postgres',
            dbr_password: 'Tribu971211',
            dbr_port: 5432,
            token_key: 'banana123',
            token_expiresIn: '7d'
        };
        default:
        console.log('Ambiente inválido')
    }
}

module.exports = config();