const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test1234@cluster0.yva3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
});