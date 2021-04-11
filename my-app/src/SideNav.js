import React, {Component} from 'react'


class SideNav extends Component{
    


    render(){
        return (
            
            <div id="sidenav">
                <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#stats">Stats</a></li>
                <li><a href="#stats">Predict</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                </ul>
            </div>
            
          )
    }

}

export default SideNav