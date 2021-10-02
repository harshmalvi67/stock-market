const express = require("express");

const app = express();
const fs = require("fs");
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
    console.log(key);
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

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});