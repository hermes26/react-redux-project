import { createStore, compose } from 'redux';
import rootReducer from './reducers/index'
//si tengo mas que un reducer, ponlo en index.js del reducer folder
//import userReducer from './reducers/user'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//place this to be able to use react dev tools
const store = createStore(rootReducer,composeEnhancers());

//Returns:
//(Store): An object that holds the complete state of your app. The only way to change its state is by dispatching actions. You may also subscribe to the changes to its state to update the UI.



export default store;