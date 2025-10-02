//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
//import { useQuery, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Countries List</h1>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.emoji} {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
