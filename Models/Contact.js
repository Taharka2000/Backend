const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userContact = new Schema({
    Prenom: {
        type: String,
    },
    Nom: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
        unique: true 
    },
    Numero: {
        type: Number,
    },
});

module.exports = mongoose.model("Contact", userContact);