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