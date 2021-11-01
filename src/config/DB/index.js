const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/TestDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Succesful');
    } catch (error) {
        console.log('Failed');
    }
}
module.exports = { connect };
