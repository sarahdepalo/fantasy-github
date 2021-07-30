import { Link } from 'react-router-dom'

const UserCard = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.avatar_url} alt="user avatar"/>
                <h1>{props.login}</h1>
                <p>{props.bio}</p>
                <Link to={`/user/${props.login}`}>Learn More</Link>
            </div>
        </>
    )
}

export default UserCard