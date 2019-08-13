import React, { Component} from 'react'
import UpdateCar from './UpdateCar.js'
import { Button, Card, CardContent, ListItem, ListItemText } from '@material-ui/core'
import RemoveCar from './RemoveCar'
class Car extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    year: this.props.year || '',
    make: this.props.make || '',
    model: this.props.model || '',
    price: this.props.price || '',
    ownerId: this.props.ownerId || '',
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
    const { editMode, id, year, make, model, price, ownerId } = this.state

    return (
      <Card>
        <CardContent>
          {
            editMode ?
              <UpdateCar
                editMode={editMode}
                id={id}
                year={year}
                make={make}
                model={model}
                price={price}
                ownerId={ownerId}
                onButtonClick={this.handleButtonClick}
                onInputChange={this.handleInputChange}
              />
              :
              <ListItem>
                <ListItemText
                  primary={`${year} ${make} ${model} ${price}`}
                />
                  <Button
                    onClick={e => this.handleButtonClick()}
                    variant='contained'
                    style={{ margin: '5px' }}
                  >
                    Edit
                  </Button>
                <RemoveCar
                  id={id}
                  make={make}
                  year={year}
                />
              </ListItem>
          }
        </CardContent>
      </Card>
    )
  }
}

export default Car