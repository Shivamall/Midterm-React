import React, { Component, Fragment } from 'react'
import UpdateOwner from './UpdateOwner'
import Car from './Car'
import { Query } from 'react-apollo'
import { GET_CARLIST } from '../queries'

import { Card, List, Container, Button, ListItem, ListItemText, CardContent } from '@material-ui/core'
import RemoveOwner from './RemoveOwner'


class Owner extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    theOwnerId: this.props.id || '',
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || ''
  }

  handleEditButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    const { editMode, id, firstName, lastName, theOwnerId } = this.state
    const fullName = `${firstName} ${lastName}`
   
    return (
      <Card>
      <CardContent>
      
        {
          editMode ?
            <UpdateOwner
              editMode={editMode}
              id={id}
              firstName={firstName}
              lastName={lastName}
              onButtonClick={this.handleButtonClick}
              onInputChange={this.handleInputChange}
            />
            :
            <Fragment>
            <ListItem>
              <ListItemText
                primary={fullName}
              />
              
                <Button
                  onClick={e => this.handleButtonClick()}
                  variant='contained'
                  style={{ margin: '5px' }}
                >
                  Edit
                </Button>
              <RemoveOwner
                id={id}
                firstName={firstName}
                lastName={lastName}
              />
            </ListItem>
            <div>
                <Query query={GET_CARLIST}>
                  {({ loading, error, data }) => {
                    console.log('data', data)
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    return (
                      <ul>
                        {data.cars.map(({ id, year, make, model, price, ownerId }) => {
                          if (ownerId == theOwnerId) {
                            return (
                              <Container key={id}>
                                <List>
                                  <Car
                                    key={id}
                                    id={id}
                                    year={year}
                                    make={make}
                                    model={model}
                                    price={price}
                                    ownerId={ownerId}
                                  />
                                </List>
                              </Container>
                            )
                          }
                        }
                        )}
                      </ul>
                    )
                  }}
                </Query>
              </div>
            </Fragment>
        }
       </CardContent>
      </Card>
    )
  }
}

export default Owner