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
            username
        }
    }
`;

export const FIND_ALL_CLIQUES = gql`
    query findAllCliques {
        clique {
            _id
            clique_author
            clique_name
            clique_members
            clique_about
            clique_events
        }
    }
`;

export const FIND_ALL_EVENTS = gql`
    query findAllEvents {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_ALL_PLANS = gql`
    query findAllPlans {
        plan {
            _id
            plan_author
            parent_event
            plan_name
            total_votes
            favored_by
            plan_about
            plan_comments
        }
    }
`;

export const FIND_ALL_COMMENTS = gql`
    query findAllComments {
        comment {
            _id
            comment_author
            plan_context
            event_context
            comment_body
        }
    }
`;

export const FIND_USER_BY_ID = gql`
    query findUserById ($id: ID) {
        user (id: $id) {
            _id
        }
    }
`;

export const FIND_CLIQUE_BY_ID = gql`
    query findCliqueById {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_EVENT_BY_ID = gql`
    query findEventById {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_ALL_CLIQUE_EVENTS = gql`
    query findAllCliqueEvents {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_ALL_EVENT_PLANS = gql`
    query findAllEventPlans {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_PLAN_BY_ID = gql`
    query findPlanById {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_EVENT_COMMENTS = gql`
    query findEventComments {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_PLAN_COMMENTS = gql`
    query findPlanComments {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_COMMENT_BY_ID = gql`
    query findCommentById {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_USER_CREATED_CLIQUES = gql`
    query findUserCreatedCliques {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_USER_CLIQUE_MEMBEROF = gql`
    query findUserCliqueMemberOf {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_USER_CREATED_EVENTS = gql`
    query findUserCreatedEvents {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_USER_CREATED_PLANS = gql`
    query findUserCreatedPlans {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_USER_CREATED_COMMENTS = gql`
    query findUserCreatedComments {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

export const FIND_ALL_CLIQUE_EVENTS_BY_USER = gql`
    query findAllCliqueEvents {
        event {
            _id
            event_author
            parent_clique
            event_name
            event_about
        }
    }
`;

