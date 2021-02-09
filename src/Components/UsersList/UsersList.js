import React from 'react';
import './UsersList.css';

class UsersList extends React.Component {

    render() {
        if (!this.props.users.length) {
            
            return <div className="no-user">            
                You do not have any user loaded!
            </div>

        }

            
        return (
            <div className="container-userlist">
                <div class="divider"><span></span> <h2>Users</h2><span></span><span></span></div>
               
                <ul className="check-list">
                {
                    this.props.users.map((user, index) =>{
                        return <li key={index} ><span onClick={() => this.props.showUser(user)}>{user.name}</span> <button type="" onClick={() => this.props.removeUser(user)}>X</button></li> 
                        })
                }
                </ul> 
            </div>
        )
    }
}

export default UsersList;
