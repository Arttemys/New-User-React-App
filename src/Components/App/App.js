import React from 'react';
import NewUser from '../NewUser/NewUser';
import UsersList from '../UsersList/UsersList';
import ShowUser from '../ShowUser/ShowUser';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      lastName: '',
      description: '',
      users: [],
      showUser: {},
      newUser: {
        name:'',
        lastName:'',
        description:''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pushUser = this.pushUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.showUser = this.showUser.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    
    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: target.value
        } 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.pushUser();

    this.setState({ newUser: {
      name: '',
      lastName: '',
      description:'' 
      }
    })
  }

  handleReset () {
    this.setState({ showUser: {} })
  }

  pushUser(){
    const user = this.state.newUser;

    if (user.name === '' || user.lastName === '' || user.description === '') {
      alert("Please enter a correct user");
      return;
    }
  
    this.setState({ users: [...this.state.users, user]
    })
  }

  removeUser(userToDelete) {
    const users = this.state.users;
    
    const filtersUser = users.filter(currentUser => currentUser !== userToDelete);

    this.setState({ users:filtersUser });
    this.setState({ showUser: {} })
  }

  showUser(userToShow) {
    const users= this.state.users;

    const user = users.find(currentUser => currentUser === userToShow);

    this.setState({ showUser: user})
  }
  
  
  render() {
    return (
      <div className="main-container"> 
        <h1>New Users</h1>
        <div>
          <NewUser onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            newUser={this.state.newUser} />
        </div>
        <UsersList users={this.state.users} 
            removeUser={this.removeUser}
            showUser={this.showUser} />
        <ShowUser user={this.state.showUser}
            removeDetails={this.handleReset}/>
      </div>
    );
  }
}


export default App;
