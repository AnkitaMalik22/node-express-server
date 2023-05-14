const express = require('express');
const foodData = require('./foodData.js');
const app = express();
const port = 4000;
let time = new Date().toLocaleString();

app.get('/health-api', (req, res) => {
    res.send({ time: time, app: "express-server", status: "active" })
})

app.get('/all', (req, res) => {
    res.send(foodData)
})

app.get('/vegetable', (req, res) => {
    let veg = foodData.filter((item) => {
        return item.category === "Vegetable"
    })
    res.send(veg)
})

app.get('/fruit', (req, res) => {
    let fruit = foodData.filter((item) => {
        return item.category === "Fruit"
    })
    res.send(fruit)
})

app.get('/protien', (req, res) => {
    let protien = foodData.filter((item) => {
        return item.category === "Protein"
    })
    console.log("protien", protien);
    res.send(protien)
})

app.get('/calorie-above-100', (req, res) => {
    let above100 = foodData.filter((item) => {
        return item.calorie > 100
    })
    res.send(above100)
})

app.get('/calorie-below-100', (req, res) => {
    let below100 = foodData.filter((item) => {
        return item.calorie < 100
    })
    res.send(below100)
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})   


