require('dotenv').config()

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;
// const MONGOCONNECT = process.env.MONGOCONNECT

let _db;

const mongoConnect = callback => {
    mongoClient.connect("mongodb+srv://mindrun:xnkl808@likeminded-arc.6s0rm.mongodb.net/likemindedDB?retryWrites=true&w=majority", { useUnifiedTopology: true })
        .then(client => {
            // console logs connect message - connects and then stores the connection to the db 
            console.log("Connected to mongo")
            _db = client.db()
            callback()
        })
        .catch(err => {
            // console.log("print for mongoENV" + MONGOCONNECT)
            console.log("error on monog connection " + err)
        })
}

// returns access to the db if the db exists
const getDb = () => {
    // if db is NOT undefined returns db else throws an error
    if (_db) {
        return _db
    }
    throw "no database found"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;