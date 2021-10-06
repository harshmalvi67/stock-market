const express = require("express");
const cors = require('cors');
const app = express();
const fs = require("fs");
const {MongoClient} = require('mongodb');

app.use(cors());

const uri = "mongodb+srv://harsh:123456@cluster0.nike2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const client = fetch();
async function fetch(){ 
    return await MongoClient.connect(uri, (err, db) => {
    if(err) throw err;
    console.log('Database is connected');
    return db;
})}

// const { default: Stock } = require("../client/src/views/stock");
var stocklist;
fs.readFile("./Stock List.json", "utf-8", (err, res) => {
    if(err) return err;
    stocklist = JSON.parse(res);
})

app.get('/', (req, res) => {
    var datalist = [];
    var map = new Map();
    for(let idx in stocklist){
        
        let s = stocklist[idx].key;
        if(map.has(s)) continue; 

        datalist.push(s);
        map.set(s, 1);
    }
    res.send(datalist);
});

app.get('/stock/:stock', (req, res) => {
    var stock = [];
    let key = req.params.stock.toUpperCase();
    for(let idx in stocklist){
        if(stocklist[idx].key === key){
            stock.push({
                x : stocklist[idx].date,
                y : [stocklist[idx].open, stocklist[idx].high, stocklist[idx].low, stocklist[idx].close]
            });
        } 
    }
    // console.log(stock);
    res.send(stock);
})

app.listen(27017, () => {
    console.log("Server is running on port 27017");
});