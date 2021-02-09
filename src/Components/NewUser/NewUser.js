import React from 'react';
import './NewUser.css';


class NewUser extends React.Component {
    render() {
        return (
            <div className="container-form">
                <form onSubmit={this.props.onSubmit}>
                    <div className="userbox">
                        <input name="name" type="text" onChange={this.props.onChange} value={this.props.newUser.name}/>  
                        <label>Name</label>
                    </div>
                    <div className="userbox"> 
                        <input name="lastName" type="text" onChange={this.props.onChange} value={this.props.newUser.lastName}/> 
                        <label> Last Name </label>
                    </div>
                    <div className="userbox">
                        <input name="description" type="text" onChange={this.props.onChange} value={this.props.newUser.description}/> 
                        <label>Description</label>
                    </div>
                    <button type="submit" value="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit</button>
                </form> 
            </div>
       );
    }
}


export default NewUser;