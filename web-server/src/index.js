// const http = require('require');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

console.log(__dirname);
// console.log(__filename);
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname,"../templates/views");
app.set('views', viewsPath);
const partialsPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialsPath);
console.log(path.join(__dirname,'../public'));
const publicDirectory = path.join(__dirname,'../public');


// console.log("publicDirectory",publicDirectory)
app.use(express.static(publicDirectory))

app.get('', (req,res) => {
    // res.send('<h1>Web Server</h1>')
    res.render('index',{
        title: 'Home',
        name: 'Home Page'
    })
})

app.get('/about', (req,res) => {
    // res.send('<h1>Web Server</h1>')
    res.render('about',{
        title: 'About',
        name: 'About Page'
    })
})

app.get('/help', (req,res) => {
    // res.send('<h1>Web Server</h1>')
    res.render('help',{
        title: 'Help',
        name: 'Help Page'
    })
})



app.get('/products', (req,res) => {
    console.log("query", req.query)
    if(!req.query.search){
        return res.send({
            error: 'You must provide an search address'
        })
    }
    else{
        res.send({
            productName: 'pen',
            mrp: 350
        })
    }
})

app.get('/help/*', (req,res) => {
    // res.send('<h1>Web Server</h1>')
    res.render('404',{
        title: '404',
        name: '404 Page Not Found'
    })
})

app.get('*', (req,res) => {
    // res.send('<h1>Web Server</h1>')
    res.render('404',{
        title: '404',
        name: '404 Page Not Found'
    })
})

app.listen(3000, () => {
    console.log("conneted on port no. 3000")
})