import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddOwners from './components/AddOwners'
import Owners from './components/Owners'
import AddCar from './components/AddCar'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <AddOwners/>
        <AddCar/>
        <Owners />
      </div>
    </ApolloProvider>
  )
}

export default App
