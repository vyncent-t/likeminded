const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
    "mongodb+srv://mindrun:xnkl808@likeminded-arc.6s0rm.mongodb.net/likemindedDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(result => {
    console.log(`we are connected via env mongconnect`)
}).catch(err => {
    console.log(err)
});

module.exports = mongoose.connection

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/likeminded_db',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

// module.exports = mongoose.connection;
