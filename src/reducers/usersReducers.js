const UsersReducers = (state = {},action) =>{
    switch(action.type){
        case "USERS_LIST":{
            return {...state,list:action.payload}
        }
        case 'CLEAR_DETAILS':
        case "USER_DETAILS":{
            return {...state,details:action.payload}
        }
        case "ADD_USER":{
            return {...state,response:action.payload}
        }
        case "UPDATE_USER":{
            return {...state,response:action.payload}
        }
        case "DELETE_USER":{
            return {...state,response:action.payload}
        }
    }
    return state
}

export default UsersReducers;