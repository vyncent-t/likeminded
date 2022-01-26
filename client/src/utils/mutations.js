import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`

    mutation createNewUser( $email: String!, $username: String!,$password: String!) {
        createNewUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`

    mutation userLogin($email: String!, $password: String!) {
        userLogin(email: $email, password: $password){
            token
            user{
                _id
            username
            }
        }
    }
`

export const CREATE_NEW_CLIQUE = gql`
    mutation createNewClique($clique_author: ID!, $clique_name: String!, $clique_about: String!) {
        createNewClique(clique_author: $clique_author, clique_name: $clique_name, clique_about: $clique_about) {
            _id
            clique_name
            clique_about
        }
    }
`

export const ADD_NEW_MEMBER = gql`
    mutation addCliqueMember($id: ID!, $newUser: ID!) {
    addCliqueMember(id: $id, newUser: $newUser) {
        _id
        clique_name
        clique_about
    }
}
`
export const REMOVE_MEMBER = gql`
    mutation removeCliqueMember($id: ID!, $targetUser: ID!) {
    removeCliqueMember(id: $id, targetUser: $targetUser) {
        _id
        clique_name
        clique_about
    }
}
`


export const DELETE_CLIQUE = gql`

    mutation deleteCliqueById($id: ID!) {
    deleteCliqueById(id: $id) {
        clique_name
    }
    }
`



export const EDIT_CLIQUE_NAME = gql`
    mutation updateCliqueName($id: ID!, $clique_name: String!) {
    updateCliqueName(id: $id, clique_name: $clique_name) {
        _id
        clique_name
        clique_about
    }
}
`

export const EDIT_CLIQUE_ABOUT = gql`
    mutation updateCliqueAbout($id: ID!, $clique_about: String!) {
    updateCliqueAbout(id: $id, clique_about: $clique_about) {
        _id
        clique_name
        clique_about
    }
}
`



export const ADD_NEW_AUTHOR = gql`
    mutation addCliqueAuthor($clique_author: ID!, $clique_name: String!, $newUser: ID!) {
    addCliqueAuthor(clique_author: $clique_author, clique_name: $clique_name, newUser: $newUser) {
        _id
        clique_name
        clique_about
    }
}
`


export const CREATE_NEW_EVENT = gql`
    mutation createNewEvent($event_author: ID!, $parent_clique: ID!, $event_name: String!, $event_about: String!) {
        createNewEvent(event_author: $event_author,parent_clique: $parent_clique, event_name: $event_name, event_about: $event_about) {
            _id
            event_name
            event_about
            event_author
        }
    }
`


export const DELETE_EVENT = gql`

    mutation deleteEventById($id: ID!) {
    deleteEventById(id: $id) {
        event_name
    }
    }
`



export const EDIT_EVENT_NAME = gql`
    mutation updateEventName($id: ID!, $event_name: String!) {
    updateEventName(id: $id, event_name: $event_name) {
        _id
        event_name
        event_about
    }
}
`

export const EDIT_EVENT_ABOUT = gql`
    mutation updateEventAbout($id: ID!, $event_about: String!) {
    updateEventAbout(id: $id, event_about: $event_about) {
        _id
        event_name
        event_about
    }
}
`



export const CREATE_NEW_PLAN = gql`
    mutation createNewPlan($plan_author: ID!, $parent_event: ID!, $plan_name: String!, $plan_about: String!) {
        createNewPlan(plan_author: $plan_author,parent_event: $parent_event, plan_name: $plan_name, plan_about: $plan_about) {
            _id
            plan_name
            plan_about
            plan_author
            parent_event
        }
    }
`


export const DELETE_PLAN = gql`

    mutation deletePlanById($id: ID!) {
    deletePlanById(id: $id) {
        plan_name
    }
    }
`



export const EDIT_PLAN_NAME = gql`
    mutation updatePlanName($id: ID!, $plan_name: String!) {
    updatePlanName(id: $id, plan_name: $plan_name) {
        _id
        plan_name
        plan_about
    }
}
`

export const EDIT_PLAN_ABOUT = gql`
    mutation updatePlanAbout($id: ID!, $plan_about: String!) {
    updatePlanAbout(id: $id, plan_about: $plan_about) {
        _id
        plan_name
        plan_about
    }
}
`