const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://aereon01:qLTPjHROKAVsigJR@cluster0.63oh2xd.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Conectado ao banco de dados!')

    } catch (error) {
        console.log(error)
    }
}

module.exports = main;