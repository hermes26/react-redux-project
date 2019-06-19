//Reducers calculate a new state given the previous state and an action. They must be pure functions—functions that return the exact same output for given inputs.

function userReducer(state = {}, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            };    
        // case 'LOGOUT':
        //     return state ;
        case 'GET_ALL' :
            return {
                ...state,
                allUsers: action.payload
            }
        default:
            return state
    }
}

export default userReducer;