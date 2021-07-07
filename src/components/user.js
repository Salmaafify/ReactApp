import {Link} from 'react-router-dom'
const User = ({ user }) => {
    if (user) {
        return (
            <div className="alert border border-2 d-flex justify-content-between">
                <div>
                <h4 className="align-self-center">{user.name}</h4>
                <p className="text-muted">{user.email}</p>
                </div>
                <Link className="w-25" to={`/users/${user._id}`}>
                    <img className="w-100 rounded-circle"
                        src={`http://localhost:4000/${user.userImage}`} style={{height:150, width:100}} />
                </Link>
            </div>
        )
    }
    return <p>No Info prop available</p>
}
export default User;