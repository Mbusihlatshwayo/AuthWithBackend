const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // what is a promise in mongoose???

mongoose
    .connect('mongodb+srv://mbusi:Fastbigm1@cluster0-j5rks.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch(err=>console.log(err));

module.exports = mongoose;