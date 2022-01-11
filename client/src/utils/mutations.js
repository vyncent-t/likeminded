import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`

    mutation createNewUser($username: String!, $email: String!, $password: String!) {
        createNewUser(username: $username, email: $email, password: $password) {
            _id 
            username
            email
            password
        }
    }
`;