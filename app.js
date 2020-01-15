const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('hello');
});

app.listen(3000, () => {
    console.log('The Application is running!');
});