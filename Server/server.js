const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bcrypt = require('bcrypt');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const private = require('./routes/private');

app.use(bodyParser.json());
// // let salt = bcrypt.genSaltSync(12);

// // let plainTextPassword = 'TESTPASS';

// // let hashedPassword = bcrypt.hashSync(plainTextPassword, salt);
// // console.log('My hashed password is equal to = ', hashedPassword);

// // let compare = bcrypt.compareSync("bacon", hashedPassword);
// // console.log('password comparison = ' + compare);

// app.get('/', (request,response)=>{
//     response.send('WELCOME!!!');
// })

app.use('/user', userRoutes);
app.use('/private', private); 

const PORT = 3000
app.listen(PORT, ()=>{
    console.log('server started on port: ' + PORT)
});