import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers} from '../actions'
import User from './user';
const UsersList = ()=>{
    const users = useSelector((state)=>state.UsersReducers.list);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    if(users){
        if(users.length>0){
            return users.map((user)=>(<User user={user} key={user._id} />)) 
        }

        return <p className="text-danger">
            This User is not available, Please search by another one.
        </p>
    }

    return <p className="text-danger">
        Please put a User to start.
    </p>
}
export default UsersList;