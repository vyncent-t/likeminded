import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Samplepage from './components/Samplepage';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Samplepage></Samplepage>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;