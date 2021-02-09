import React from 'react';
import './ShowUser.css'


class ShowUser extends React.Component {
    render() {
        if(!this.props.user.name){
            return <div className="no-description">
                Click on a name to see the Description
            </div>
        }
        return (
            <div className="container-description">
                <h2>Description</h2>
                <button type="" className="cancel" onClick={this.props.removeDetails}>x</button>
                 <div className="description">
                     <ul>
                         <li>Name: {this.props.user.name}</li>
                         <li>Last Name: {this.props.user.lastName}</li>
                         <li>Details: {this.props.user.description} </li>
                     </ul> 
                 </div>
            </div>
           
        )
    }
}

export default ShowUser;