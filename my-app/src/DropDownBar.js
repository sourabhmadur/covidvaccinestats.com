import React, {Component} from 'react'
// import Table from './Table'

// import Form from './Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const DropDownButton = (props) => {
    return (
        <div class="dropdown">
        <button class="dropbtn">{props.default}</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    )
  }

class DropDownBar extends Component {


    render() {
    
      return (
          <React.Fragment>
            <DropDownButton default="Country"/>
          <DropDownButton default="State"/>
          </React.Fragment>
          
      )
    }
  }

export default DropDownBar
