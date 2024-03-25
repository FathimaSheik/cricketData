const mongoose = require('mongoose');

const cricketSchema = new mongoose.Schema({
    ranking : Number,
    name : String,
    runs : Number,
    balls : Number,
    fours : Number,
    sixes : Number,
    sr : Number,
    team : String,
    opposition : String,
    matchDate : String
})

const MenRanking = new mongoose.model('menranking' , cricketSchema);
module.exports =  MenRanking;