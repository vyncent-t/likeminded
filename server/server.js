require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const mongoose = require('mongoose');

//const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT
const MONGOCONNECT = process.env.MONGOCONNECT
const app = express();

const adminRoutes = require('./routes/index')





// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/admin', adminRoutes)
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

mongoose.connect(
  MONGOCONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
).then(result => {
  app.listen(PORT)
  console.log(`CONNECTED MONGOOSE TO PORT ${PORT}`)
  console.log(`${MONGOCONNECT}`)
}).catch(err => {
  console.log(err)
});