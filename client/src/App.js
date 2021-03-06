import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Route, Routes, Navigate } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/landingpage'
import CreateLogInPage from './pages/createLogInPage';
import Dashboard from './pages/dashboard';
import CliquePage from './pages/cliquePage'
import EventPage from './pages/eventPage'
import PlanPage from './pages/planPage'



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// import {BrowserRouter} on index.js file then wrap <App/> in <BrowserRouter/>

// replaces the switch route method of old

// use navigate to act as the redirect for all other param inputs

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/welcome" element={<CreateLogInPage />} />
        <Route path="/clique" element={<CliquePage />} />
        <Route path="/clique/:cliqueID" element={<CliquePage />} />
        <Route path="/clique/:cliqueID/:edit" element={<CliquePage />} />
        <Route path="/clique/:cliqueID/event/:eventID" element={<EventPage />} />
        <Route path="/clique/:cliqueID/event/:eventID/:edit" element={<EventPage />} />
        <Route path="/clique/:cliqueID/event/:eventID/plan/:planID" element={<PlanPage />} />
        <Route path="/clique/:cliqueID/event/:eventID/plan/:planID/:edit" element={<PlanPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;