import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`

    mutation createNewUser($username: String!, $email: String!, $password: String!) {
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

export const ADD_NEW_AUTHOR = gql`
    mutation addCliqueAuthor($clique_author: ID!, $clique_name: String!, $newUser: ID!) {
        addCliqueAuthor(clique_author: $clique_author, clique_name: $clique_name, newUser: $newUser) {
            _id
            clique_name
            clique_about
        }
    }
`

