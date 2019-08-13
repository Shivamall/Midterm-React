import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import uuidv4 from 'uuid/v4'

import { ADD_OWNER, GET_OWNERS } from '../queries'

import { Button, TextField} from '@material-ui/core'

class AddOwners extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  render() {
    const { firstName, lastName } = this.state
    const id = uuidv4()
    return (
      <Mutation
        mutation={ADD_OWNER}
        update={(store, { data: { addOwners } }) => {
          const { owners } = store.readQuery({ query: GET_OWNERS })
          store.writeQuery({
            query: GET_OWNERS,
            data: { owners: owners.concat([addOwners])}
          })
        }}
      >
        {(addOwners, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault()
            addOwners({
              variables: {
                id,
                firstName,
                lastName
              },
              optimisticResponse: {
                __typename: 'Mutation',
                add: {
                  __typename: 'Owners',
                  id,
                  firstName,
                  lastName
                }
              }
            })
          }}>
            <TextField
              label='First Name'
              value={firstName}
              placeholder='i.e. John'
              onChange={e => this.setState({ firstName: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='Last Name'
              value={lastName}
              placeholder='i.e. Smith'
              onChange={e => this.setState({ lastName: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ margin: '5px' }}
            >
              Add Contact
            </Button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddOwners