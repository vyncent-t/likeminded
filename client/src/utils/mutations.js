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

export const DELETE_CLIQUE = gql`

    mutation deleteCliqueById($id: ID!) {
    deleteCliqueById(id: $id) {
        clique_name
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