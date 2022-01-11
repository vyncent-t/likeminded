import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LandingPage from './pages/landingpage';
import CreateLogInPage from './pages/createLogInPage';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <CreateLogInPage />
      </div>
    </ApolloProvider>
  );
}

export default App;