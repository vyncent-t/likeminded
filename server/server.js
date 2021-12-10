require('dotenv').config()
const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
const path = require('path');

//const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;
const MONGOCONNECT = process.env.MONGOCONNECT


// MAY NEED TO CHANGE PW AND USE ENV FOR STRING CONNECT
const mongoConnect = require('./config/mongodbconnect')



// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

//server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(path.join(__dirname + '../client/public')));

// TEMP COMMENTING OUT

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

// TEMP COMMENTING OUT UP

mongoConnect(client => {
  console.log("client print")
  console.log(client)
  app.listen(PORT)
})


