import React, { Component } from 'react';
import { BrowserRouter as  Route } from "react-router-dom";
import UserCard from './UserCard';
import UserProfile from './UserProfile';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: [],
            userFound: false
        }
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.github.com/users/${this.state.username}`)
            .then(response => response.json())
        const newUserDate = response

        if (response.login !== undefined && this.state.users.includes(this.state.username) === false) {
            this.setState({
                users: [...this.state.users, newUserDate],
                userFound: true
            })
        }
    }

    _handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }


    render() {
        const { users, userFound } = this.state;
        const userCard = users.map((user, index) => {
            return (
                <>
                    <UserCard
                        key={index}
                        login={user.login}
                        avatar_url={user.avatar_url}
                        bio={user.bio}
                        userFound={this.state.userFound}
                    />
                </>
            )
        })
        return (
            <>
                <Route exact path="/">
                    <form onSubmit={this._handleSubmit}>
                        <input type="text"
                            placeholder="Enter the Username of a Programmer" name="username"
                            value={this.state.value}
                            onChange={this._handleChange} />
                        <button type="submit">Add to Team</button>
                    </form>
                    <div className="UserCards">
                        {!!userFound ? userCard : ''}
                    </div>

                </Route>
                <Route path = "/user/:username">
                    <UserProfile 
                    users={this.state.users}
                    />
                </Route>
            </>
        )
    }
}



export default SearchForm