import { gql } from '@apollo/client';

export const FIND_ALL_USERS = gql`
    query findAllUsers {
        user {
            _id
            username
            email
            member_of
        }
    }
`;

export const FIND_ALL_EMAILS = gql`
    query emailFinder {
        findAllUsers {
            _id
            email
        }
    }
`;

export const FIND_ALL_CLIQUES = gql`
    query findAllCliques {
        clique {
            _id
            clique_name
        }
    }
`;

export const FIND_ALL_EVENTS = gql`
    query findAllEvents {
        event {
            _id
            event_name
            event_about
        }
    }
`;

export const FIND_ALL_PLANS = gql`
    query findAllPlans {
        plan {
            _id
            plan_name
            plan_about
        }
    }
`;

export const FIND_ALL_COMMENTS = gql`
    query findAllComments {
        comment {
            _id
            comment_author
            comment_body
        }
    }
`;

export const FIND_USER_BY_ID = gql`
    query findUserById ($id: ID) {
        user (id: $id) {
            _id
            username
        }
    }
`;

export const FIND_CLIQUE_BY_ID = gql`
    query findCliqueById ($id: ID) {
        clique (id: $id) {
            _id
            clique_name
        }
    }
`;

export const FIND_EVENT_BY_ID = gql`
    query findEventById ($id: ID) {
        event (id: $id) {
            _id
            event_name
        }
    }
`;

export const FIND_ALL_CLIQUE_EVENTS = gql`
    query findAllCliqueEvents {
        clique {
            _id
            clique_events
        }
    }
`;

export const FIND_ALL_EVENT_PLANS = gql`
    query findAllEventPlans {
        plan {
            _id
            plan_name
        }
    }
`;

export const FIND_PLAN_BY_ID = gql`
    query findPlanById ($id: ID) {
        plan (id: $id) {
            _id
            plan_name
        }
    }
`;

export const FIND_EVENT_COMMENTS = gql`
    query findEventComments {
        event {
            _id
            event_name
            event_comments
        }
    }
`;

export const FIND_PLAN_COMMENTS = gql`
    query findPlanComments {
        plan {
            _id
            plan_comments
        }
    }
`;

export const FIND_COMMENT_BY_ID = gql`
    query findCommentById ($id: ID) {
        comment (id: $id) {
            _id
            comment_author
            comment_body
        }
    }
`;

export const FIND_USER_CREATED_CLIQUES = gql`
    query findUserCreatedCliques {
        query {
            findUserCreatedCliques
        }
    }
`;

export const FIND_USER_CLIQUE_MEMBEROF = gql`
    query findUserCliqueMemberOf {
        query {
            findUserCliqueMemberOf
        }
    }
`;

export const FIND_USER_CREATED_EVENTS = gql`
    query findUserCreatedEvents {
        query {
            findUserCreatedEvents
        }
    }
`;

export const FIND_USER_CREATED_PLANS = gql`
    query findUserCreatedPlans {
        query {
            findUserCreatedPlans
        }
    }
`;

export const FIND_USER_CREATED_COMMENTS = gql`
    query findUserCreatedComments {
        query {
            findUserCreatedComments
        }
    }
`;

export const FIND_ALL_CLIQUE_EVENTS_BY_USER = gql`
    query findAllCliqueEvents {
        user {
            created_events
        }
    }
`;

