import { useRef } from "react";
import { useDispatch } from "react-redux";
import {getUserByName} from '../actions'
const Search = () =>{
    const nameRef = useRef();
    const dispatch = useDispatch()
    return <div className="text-center">
        <input ref={nameRef} type="text" placeholder="search by Name" 
        className="form-control rounded-pill w-75 m-auto"/>
        <button className="btn btn-dark m-2 w-25"
        onClick={()=>{
            console.log(nameRef.current.value)
            dispatch(getUserByName(nameRef.current.value))
             nameRef.current.value = "";
        }}>
            Search
        </button>
    </div>
    
}

export default Search