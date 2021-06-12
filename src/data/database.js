const mongoose = require('mongoose');
/* DOTENV */  require('dotenv').config();

let isConect = false;
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConect = true;
        console.log('banco conectado!')
    } catch (error) {
        console.error(error.message)
    }
}


// caso o banco de dados não esteja conectado eu posso retornar isso como um bolean e usar como um middleware futuramente para poder usar o catch como erros simples
module.exports = { connect, isConect }
