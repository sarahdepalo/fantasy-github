import { useParams } from 'react-router-dom'

const UserProfile = (props) => {
    const { username } = useParams();
    const users = props.users
    const user = users.find((user) => {
        return user.login === username ? user : null
    })
    console.log(user)
    return (
        <>
            <div className="card">
                <h1>User Profile</h1>
                <img src={user.avatar_url} />
                <h2>{user.login}</h2>
                <p>{user.bio}</p>
                <p>Followers: {user.followers}</p>
                <a href={user.html_url} target="_blank">Respository</a>
            </div>
        </>
    )

}

export default UserProfile