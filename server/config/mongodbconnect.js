require('dotenv').config()

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;
const Connect = process.env.MONGOCONNECT

const mongoConnect = callback => {
    mongoClient.connect("mongodb+srv://mindrun:xnkl808@likeminded-arc.6s0rm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true })
        .then(client => {
            console.log("Connected to mongo")
            callback(client)
        })
        .catch(err => {
            console.log(MONGOCONNECT)
            console.log("error on monog connection " + err)
        })
}

module.exports = mongoConnect