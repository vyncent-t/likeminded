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

    type Auth {
        token: ID!
        user: User
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
        parent_clique: Clique
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
        thisUser: User
        findAllUsers: [User]
        findUserById(id: ID!): User
        findUserCreatedCliques(id: ID!): [Clique]
        findUserCliqueMemberOf(id: ID!): [Clique]
        findUserCreatedEvents(id: ID!): [Event]
        findUserCreatedPlans(id: ID!): [Plan]
        findUserCreatedComments(id: ID!): [Comment]
        findAllCliques: [Clique]
        findCliqueById(id: ID!): Clique
        findCliqueByNarrow(author_id: ID!,clique_name: String!): Clique
        findAllEvents: [Event]
        findEventById(id: ID!): Event
        findAllCliqueEvents(id: ID!): [Event]
        findAllPlans: [Plan]
        findPlanById(id: ID!): Plan
        findAllEventPlans(id: ID!): [Plan]
        findAllComments: [Comment]
        findCommentById(id: ID!): Comment
        findEventComments(id: ID!): [Comment]
        findPlanComments(id: ID!): [Comment]
    }
    type Mutation {
        createNewUser(username: String!, email: String!, password: String!): Auth
        userLogin(email: String!, password: String!): Auth
        updateUsername(id: ID!, username:String!): User
        updateUserEmail(id: ID!, email:String!): User
        updateUserPassword(id: ID!, password:String!): User
        deleteUserById(id: ID!): User
        createNewClique(clique_author: ID!, clique_name: String!, clique_about: String!): Clique
        addCliqueMember(id: ID!, newUser: ID!): Clique
        removeCliqueMember(id: ID!, targetUser: ID!): Clique
        updateCliqueName(id: ID!, cliqueName: String!): Clique
        updateCliqueAbout(id: ID!, cliqueAbout: String!): Clique
        deleteCliqueById(id: ID!): Clique
        createNewEvent(event_author: ID!, parent_clique: ID!, event_name: String!, event_about: String!): Event
        updateEventName(id: ID!, eventName: String!): Event
        updateEventAbout(id: ID!, eventAbout: String!): Event
        deleteEventById(id: ID!): Event
        createNewPlan(plan_author: ID!, parent_event: ID!, plan_name: String!, plan_about: String!): Plan
        updatePlanName(id: ID!, planName: String!): Plan
        updatePlanAbout(id: ID!, planAbout: String!): Plan
        deletePlanById(id: ID!): Plan
        # findAllUsersInFavor(id: ID!): [User]
        createEventComment(comment_author: ID!, event_context: ID!, comment_body: String!): Comment
        createPlanComment(comment_author: ID!, plan_context: ID!, comment_body: String!): Comment
        deleteCommentById(id: ID!): Comment
    }
`

module.exports = typeDefs