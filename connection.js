const mongoose = require('mongoose');

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
});