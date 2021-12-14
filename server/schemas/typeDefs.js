const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        create_cliques: [Clique]
        member_of: [Clique]
        created_events: [Event]
        created_plans: [Plan]
        created_comments: [Comment]
    }

    type Clique {
        _id: ID
        clique_author: User
        clique_name: String
        clique_members: [User]
        clique_about: String
        clique_events: [Event]
    }

    
    type Event {
        _id: ID
        event_author: User
        event_name: String
        event_about: String
        event_plans: [Plan]
        event_comments: [Comment]
    }

    
    type Plan {
        _id: ID
        plan_author: User
        parent_event: Event
        plan_name: String
        total_votes: Int
        favored_by: [User]
        plan_about: String
        plan_comments: [Comment]
    }

    type Comment {
        _id: ID
        comment_author: User
        plan_context: Plan
        event_context: Event
        comment_body: String
    }

    type Query {
        findAllUsers: [User]
    }

    type Mutation {
        findUserById(id: ID!): User
        updateUsername(id: ID!, username:String!): User
        updateUserEmail(id: ID!, email:String!): User
        updateUserPassword(id: ID!, password:String!): User
        deleteUser(id: ID!): User
    }
`

module.exports = typeDefs