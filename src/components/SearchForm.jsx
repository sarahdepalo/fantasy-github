import React, { Component } from 'react';
import UserCard from './UserCard'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: [],
        }
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.github.com/users/${this.state.username}`)
            .then(response => response.json())
        const newUserDate = response
        // in the future add an isvalid state to return a message if no users are found. 
        this.setState({
            users: [...this.state.users, newUserDate]
        })

    }

    _handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }


    render() {
        const { users } = this.state;
        const userCard = users.map((user, index) => {
            return (
                <UserCard
                    key={index}
                    login={user.login}
                    avatar_url={user.avatar_url}
                    bio={user.bio}
                />
            )
        })
        return (
            <>
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <input type="text"
                            placeholder="Enter the Username of a Programmer" name="username"
                            value={this.state.value}
                            onChange={this._handleChange} />
                    </form>
                    <button type="submit">Add to Team</button>
                    <div className="UserCards">
                        {userCard}
                    </div>

                </div>
            </>
        )
    }
}



export default SearchForm