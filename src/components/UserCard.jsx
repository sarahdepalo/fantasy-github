function UserCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.avatar_url} />
                <h1>{props.login}</h1>
                <p>{props.bio}</p>
            </div>
        </>
    )
}

export default UserCard