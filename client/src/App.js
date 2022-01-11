import React, { Fragment } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import CreateLogInPage from './pages/createLogInPage';
import Navbar from './components/Navbar';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// import {BrowserRouter} on index.js file then wrap <App/> in <BrowserRouter/>

// replaces the switch route method of old

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<CreateLogInPage />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;