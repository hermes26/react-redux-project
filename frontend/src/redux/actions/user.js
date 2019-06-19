import store from '../store'
import axios from 'axios';

    export const registerUser = async ({name, email, password}) => {
        const res = await axios.post('http://localhost:3001/users/register',{
            name, email, password
    })
    
    const action = {
        type: 'REGISTER',
        payload: res.data.user,
    }

    //Dispatches an action. This is the only way to trigger a state change.
    //The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state.
    store.dispatch(action) //va al reducer 
    return res;
    } 

    export const getAllUsers = async() =>{
        try{
        const res = await axios.get('http://localhost:3001/users/all');
        const action = {
            type: 'GET_ALL',
            payload: res.data,
        }
        store.dispatch(action)
    }catch(error){
        console.log(error)
    }
} 




    //https://redux.js.org/api/store#dispatch