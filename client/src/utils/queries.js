import { gql } from '@apollo/client';

export const FIND_ALL_USERS = gql`
    query findAllUsers {
        findAllUsers {
            _id
            username
            email
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


export const FIND_USERNAME = gql`
    query findUserByUsername($username: String!) {
        findUserByUsername(username: $username) {
            _id
            username
            email
        }
    }
`


export const FIND_USERS_CLIQUES = gql`
    query findUserCliqueMemberOf($id: ID!) {
        findUserCliqueMemberOf(id: $id) {
            _id
            clique_name
            clique_about
            clique_author 
        }
    }
`


export const FIND_NARROW_CLIQUE = gql`
    query findCliqueByNarrow($author_id: ID!, $clique_name: String!) {
        findCliqueByNarrow(author_id: $author_id, clique_name: clique_name) {
            _id
            clique_name
            clique_about
        }
    }
`

export const FIND_CLIQUE = gql`
    query findCliqueById($id: ID!) {
        findCliqueById(id: $id) {
            _id
            clique_name
            clique_about
            clique_author 
        }
    }
`

export const FIND_EVENTS = gql`
    query findAllCliqueEvents($id: ID!) {
        findAllCliqueEvents(id: $id) {
            _id
            event_name
            event_about
            event_author
            parent_clique
        }
    }
`

export const FIND_EVENT = gql`
    query findEventById($id: ID!) {
        findEventById(id: $id) {
            _id
            event_name
            event_about
            event_author 
            parent_clique
        }
    }
`


export const FIND_PLANS = gql`
    query findAllEventPlans($id: ID!) {
        findAllEventPlans(id: $id) {
            _id
            plan_name
            plan_about
            plan_author
            parent_event
        }
    }
`

export const FIND_PLAN = gql`
    query findPlanById($id: ID!) {
        findPlanById(id: $id) {
            _id
            plan_name
            plan_about
            plan_author 
            parent_event
        }
    }
`




// export const FIND_VOTES = gql`
//     query findPlanById($id: ID!) {
//         findPlanById(id: $id) {
//             _id
//             plan_name
//             favored_by
//         }
//     }
// `






// export const FIND_ALL_CLIQUES = gql`
//     query findAllCliques {
//         clique {
//             _id
//             clique_author
//             clique_name
//             clique_members
//             clique_about
//             clique_events
//         }
//     }
// `;

// export const FIND_ALL_EVENTS = gql`
//     query findAllEvents {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_ALL_PLANS = gql`
//     query findAllPlans {
//         plan {
//             _id
//             plan_author
//             parent_event
//             plan_name
//             total_votes
//             favored_by
//             plan_about
//             plan_comments
//         }
//     }
// `;

// export const FIND_ALL_COMMENTS = gql`
//     query findAllComments {
//         comment {
//             _id
//             comment_author
//             plan_context
//             event_context
//             comment_body
//         }
//     }
// `;

// export const FIND_USER_BY_ID = gql`
//     query findUserById ($id: ID) {
//         user (id: $id) {
//             _id
//         }
//     }
// `;

// export const FIND_CLIQUE_BY_ID = gql`
//     query findCliqueById {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_EVENT_BY_ID = gql`
//     query findEventById {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_ALL_CLIQUE_EVENTS = gql`
//     query findAllCliqueEvents {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_ALL_EVENT_PLANS = gql`
//     query findAllEventPlans {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_PLAN_BY_ID = gql`
//     query findPlanById {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_EVENT_COMMENTS = gql`
//     query findEventComments {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_PLAN_COMMENTS = gql`
//     query findPlanComments {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_COMMENT_BY_ID = gql`
//     query findCommentById {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_USER_CREATED_CLIQUES = gql`
//     query findUserCreatedCliques {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_USER_CLIQUE_MEMBEROF = gql`
//     query findUserCliqueMemberOf {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_USER_CREATED_EVENTS = gql`
//     query findUserCreatedEvents {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_USER_CREATED_PLANS = gql`
//     query findUserCreatedPlans {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_USER_CREATED_COMMENTS = gql`
//     query findUserCreatedComments {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

// export const FIND_ALL_CLIQUE_EVENTS_BY_USER = gql`
//     query findAllCliqueEvents {
//         event {
//             _id
//             event_author
//             parent_clique
//             event_name
//             event_about
//         }
//     }
// `;

