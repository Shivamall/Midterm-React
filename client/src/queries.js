import { gql } from 'apollo-boost'


export const GET_CARLIST = gql`
  {
    cars {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`

export const GET_OWNERS = gql`
  {
    owners {
      id
      firstName
      lastName
    }
  }
`
export const ADD_CAR = gql`
  mutation AddCar($id: String!, $year: String!, $make: String!, $model: String!, $price: String!, $ownerId: String!) {
    addCar(id: $id, year: $year, make: $make, model: $model, price: $price, ownerId: $ownerId) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`


export const ADD_OWNER = gql`
  mutation AddOwner($id: String!, $firstName: String!, $lastName: String!) {
    addOwners(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`



export const UPDATE_CAR = gql`
  mutation UpdateCar($id: String!, $year: String!, $make: String!, $model: String!, $price: String!, $ownerId: String!) {
    updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, ownerId: $ownerId) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`

export const UPDATE_OWNER= gql`
  mutation UpdateOwner($id: String!, $firstName: String!, $lastName: String!) {
    updateOwner(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_OWNER = gql`
  mutation RemoveOwner($id: String!) {
    removeOwner(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`