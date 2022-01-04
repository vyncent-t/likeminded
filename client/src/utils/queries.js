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

export const FIND_ALL_CLIQUES = gql`

`;

export const FIND_ALL_EVENTS = gql`

`;

export const FIND_ALL_PLANS = gql`

`;

export const FIND_ALL_COMMENTS = gql`

`;

export const FIND_USER_BY_ID = gql`

`;

export const FIND_CLIQUE_BY_ID = gql`

`;

export const FIND_EVEND_BY_ID = gql`

`;

export const FIND_ALL_CLIQUE_EVENTS = gql`

`;

export const FIND_ALL_EVENT_PLANS = gql`

`;

export const FIND_PLAN_BY_ID = gql`

`;

export const FIND_ALL_USERS_IN_FAVOR = gql`

`;

export const FIND_EVENT_COMMENTS = gql`

`;

export const FIND_PLAN_COMMENTS = gql`

`;

export const FIND_COMMENT_BY_ID = gql`

`;

export const FIND_USER_CREATED_CLIQUES = gql`

`;

export const FIND_USER_CLIQUE_MEMBEROF = gql`

`;

export const FIND_USER_CREATED_EVENTS = gql`

`;

export const FIND_USER_CREATED_PLANS = gql`

`;

export const FIND_USER_CREATED_COMMENTS = gql`

`;

export const FIND_ALL_CLIQUE_EVENTS_BY_USER = gql`

`;

