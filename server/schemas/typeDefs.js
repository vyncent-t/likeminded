const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        userName: String!
        email: String!
        password: String!
        # post: [Plan]
    }
    
    type Clique {
        _id: ID
        cliqueAuthor: String
        cliqueName: String
        cliqueMembers: String
        cliqueAbout: String
        # cliqueEvents: [Event]
        createdAt: String
    }
    
    type Query {
        cliques: [Clique]!
    }
    
    type Mutation {
        addClique(cliqueAuthor: String, cliqueName: String!, cliqueMembers: String, cliqueAbout: String!): Clique
    }`;

    module.exports = typeDefs;