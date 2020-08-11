const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    country: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Team', teamSchema);