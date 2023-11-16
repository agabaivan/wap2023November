const express = require('express');

const path = require('path');

const usersRouter = require('./routes/users');

const productsRouter = require('./routes/products');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});

app.use('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/', (req, res) => {
    console.log('Trying out.....!');
    res.send('New page');
});

app.use('/users', usersRouter);

app.use('/products', productsRouter);



app.use((req, res, next) => {
    res.status(404).send('404 NOT FOUND!, Try other way');
});


app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!!!!!!!!');
});

app.listen(3000, () => {

    console.log('Your Server is running on 3000');

});