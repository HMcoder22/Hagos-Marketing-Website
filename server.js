const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/about', (req,res) =>{
    res.render('about')
})

app.get('/information', (req,res) =>{
    res.render('information')
})

app.listen(process.env.PORT || 3000)