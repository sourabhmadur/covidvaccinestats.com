import React, {Component} from 'react'


class SideNav extends Component{
    


    render(){
        return (
            
            <div id="sidenav">
                <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#stats">Stats</a></li>
                <li><a href="#stats">Predictions</a></li>
                <li><a href="#contact">Availability</a></li>
                </ul>
            </div>
            
          )
    }

}

export default SideNav