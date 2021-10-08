const express = require('express')
const _ = require('lodash')
const variables = require('./variables.js')

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// console.log(variables);

const app = express();

app.use(express.static('static'))

app.get('/', (req, res)=>{
    res.send('<h1>This is the index page</h1>');
})
app.get('/about', (req, res)=>{
    res.send({'page': 'about page'});
})
app.get('/gallary', (req, res)=>{
    res.send(`
    <h1>This is the GALLARY page</h1>
    <div>
        <img src="/img/masterChief.jpeg" />
    </div>
`)})

app.listen(3000, ()=>{
    console.log('Server running on http://www.localhost:3000/');
});