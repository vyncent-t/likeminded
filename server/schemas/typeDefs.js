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
        findAllCliques: [Clique]
    }

    type Mutation {
        findUserById(id: ID!): User
        updateUsername(id: ID!, username:String!): User
        updateUserEmail(id: ID!, email:String!): User
        updateUserPassword(id: ID!, password:String!): User
        deleteUser(id: ID!): User

        findUserCreatedCliques(id: ID!): [Clique]
        findUserCliqueMemberOf(id: ID!): [Clique]
        findUserCreatedEvents(id: ID!): [Event]
        findUserCreatedPlans(id: ID!): [Plan]
        findUserCreatedComments(id: ID!): [Comment]


        findCliqueById(id: ID!): Clique
        updateCliqueName(id: ID!, cliqueName: String!): Clique
        updateCliqueAbout(id: ID!, cliqueAbout: String!): Clique
        deleteCliqueById(id: ID!): Clique
        findAllCliqueEvents(id: ID!): [Event]

        findEventById(id: ID!): Event
        updateEventName(id: ID!, eventName: String!): Event
        updateEventAbout(id: ID!, eventAbout: String!): Event
        deleteEventById(id: ID!): Event
        findAllEventPlans(id: ID!): [Plan]
        findAllEventComments(id: ID!): [Comment]

        findPlanById(id: ID!): Plan
        updatePlanName(id: ID!, planName: String!): Plan
        updatePlanAbout(id: ID!, planAbout: String!): Plan
        deletePlanById(id: ID!): Plan
        findAllPlanComments(id: ID!): [Comment]
        findAllUsersInFavor(id: ID!): [User]

        findCommentById(id: ID!): Comment
        deleteCommentById(id: ID!): Comment

    }
`

module.exports = typeDefs