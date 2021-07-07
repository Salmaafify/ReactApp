// import UserService from "../services/userService";

// export const getAllUsers = () =>async(dispatch)=>{
//         try{
//             const res = await UserService.getAllUsers();
//             console.log(res);

//             dispatch({
//                 type:"GET-USERS",
//                 payload:res.data
//             });
//         }
//         catch(error){
//             console.log(error)
//         }
//     }

// ////////////////////////////////////////
// export const getUserByName = (name)=>async(dispatch)=>{
//         try{
//         const res = await UserService.getByName(name);

//         dispatch({
//             type:"GET-USERS",
//             payload:res.data
//         });
//     }

//     catch(error){
//         console.log(error)
//     }
// }
// /////////////////////////////////////////////////////////
// export const getUserById = (id)=>async(dispatch)=>{
//     try{
//         const res = await UserService.getUserById(id);

//         dispatch({
//             type:"USER-DETAILS",
//             payload:res.data
//         });
//     }

//     catch(error){
//         console.log(error)
//     }
// }

import axios from "axios";

const baseUsl = 'http://localhost:4000/api/users';

export const getAllUsers = async ()=>{
    let response = null;
    try{
        response = await axios.get(baseUsl);
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"USERS_LIST",
        payload:response.data
    }
}

export const getUserByName = async (name)=>{
   // console.log(name);
    let response = null;

    try{
        response = await axios.get(`${baseUsl}?name=${name}`)
          
             console.log(response)
         
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"USERS_LIST",
        payload:response.data
    }
}

export const getUserDetails = async (id)=>{
    let response = null;

    try{
        response = await axios.get(`${baseUsl}/${id}`)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"USER_DETAILS",
        payload:response.data
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS',
        payload:null
    }
}


export const addNewUser = async(user)=>{
    let response = null;
    try{
        response =  await axios.post(baseUsl,user);
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"ADD_USER",
        payload:response.data
    }
}

export const updateUser = async(id,updatedUser)=>{
    let response = null;
    try{
        response = await axios.patch(`${baseUsl}/${id}`,updatedUser)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"UPDATE_USER",
        payload:response.data
    }
}

export const deleteUser = async(id) =>{
    let response = null;

    try{
        response = await axios.delete(`${baseUsl}/${id}`)
    }
    catch(error){
        console.log(error)
    }
    return{
        type:"DELETE_USER",
        payload:response.data
    }
}
 

