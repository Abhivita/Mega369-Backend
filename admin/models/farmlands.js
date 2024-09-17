const mongoose = require('mongoose');
const farmland = new mongoose.Schema({
    size: {
        type: String,
        require: true
    },
    logitude: {
        type: String,
    },
    latitude: {
        type: String
    },
    city: {
        type: String,
        require: true
    },
    area: {
        type: String
    },
    owner: {
        type: String,
        require: true
    },
    purchesdate: {
        type: String
    },
    isactive: {
        type: String,
        require: true
    },
    price: {
        type: String
    },
    farmworks: {
        type: String
    },
    watersource: {
        type: String
    },
    status: {
        type: String
    },
    photo:{
        type:[String]
    }
});

module.exports = mongoose.model('farmland',farmland);