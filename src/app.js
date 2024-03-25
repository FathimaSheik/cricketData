const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
app.use(cors())
const MenRanking = require('./models/cricketinfo');
require('./db/connection');
app.use(express.json());

app.get('/getmendata', async(req, res)=>{
    try{
        const getmen = await MenRanking.find({});
        res.status(201).send(getmen)
    }
    catch(e){

    }

})

app.get('/', (req, res)=>{
    res.send('<h1>Creation of API</h1>')
})

// app.post('/menranking', async(req, res)=>{
//     try{
//         const addingMenRecord = new MenRanking(req.body);
//         const insertData = await addingMenRecord.create();
//         console.log(insertData);
//         res.status(201).send(insertData)
//     }
//     catch(e){
//         console.log(e);
//     }
// })

app.post('/menranking', async(req, res)=>{
    try{
        const insertData = await MenRanking.create(req.body);
        console.log(insertData);
        res.status(201).send(insertData);
    }
    catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
});



app.listen(port, ()=>{
    console.log(`Server is listening at port number: ${port}`);
})