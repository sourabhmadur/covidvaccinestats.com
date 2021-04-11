import React, {Component} from 'react'
// import Table from './Table'

// import Form from './Form'
// import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-bootstrap/Dropdown'
import DropDownBar from './DropDownBar'
import PanelsArea from './PanelsArea'
import SideNav from './SideNav'
class App extends Component {

    state = {
        country : '',
        state : '',
        visible : true
    }

    render() {
    
      return (    
        <div id="root_app">
        { this.state.visible ? <SideNav/> : null }
        
          /* <div id="dropdownbar"><DropDownBar/></div>
          <div id="panelsarea">   
          <PanelsArea/>
          </div> 
          </div>    
         
        
      )
    }
  }

export default App
