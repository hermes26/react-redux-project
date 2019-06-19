////////////////////////////////////USING REACT///////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import axios from 'axios'

// class Users extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             users: [],
//         }
//     }


//      async componentDidMount(){
//         console.log('el componente se ha montado')
//         try {
//             const res = await axios.get('http://localhost:3001/users/all');
//             this.setState( {users: res.data} ) //ie {users: users}
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     componentDidUpdate(){
//         console.log('component has updated');
//     }

//     componentWillUnmount(){
//         console.log('componente se ha desmontado')
//     }

//     render (){
//         return (
//             <div className="users">
//                 Estos son los usuarios:
//                     {this.state.users.map(user => 
//                     (
//                     <div key={user._id}>
                        //{user.name}
                        //{user.email}
                        //</div>
//                     )
//                 )}
//             </div>
//         )
//     }
// }

// export default Users;


/////////////////////////////////////USING REDUX//////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// // import axios from 'axios'
// import {connect} from 'react-redux'
// // import store from '../../../redux/store';
// import {getAllUsers} from '../../../redux/actions/user'

// class Users extends React.Component{


//      async componentDidMount(){
//         console.log('el componente se ha montado')
//         
//             // const res = await axios.get('http://localhost:3001/users/all');
//             // store.dispatch({
//             //     type: 'GET_ALL',
//             //     payload: res.data,
//             // })
//             getAllUsers();
//     }

//     componentDidUpdate(){
//         console.log('component has updated');
//     }

//     componentWillUnmount(){
//         console.log('componente se ha desmontado')
//     }

//     render (){
//         return (
//             <div className="users">
//                 Estos son los usuarios:
//                     {this.props.users && this.props.users.map(user => //1.si no hay usuarios en users - devuelve un falsy ie undefined 2.con users para map
//                     (
//                     <div key={user._id}>
//                         <h3>{user.name}</h3>
//                         <span>{user.email}</span>
//                     </div>
//                     )
//                 )}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state =>{
//     return {
//         users: state.userReducer.allUsers
//     }
// }

// export default connect(mapStateToProps)(Users)


/////////////////////////////////////USING REDUX WITH HOOKS/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useEffect} from 'react';
// import axios from 'axios'
import {connect} from 'react-redux'
// import store from '../../../redux/store';
import {getAllUsers} from '../../../redux/actions/user'
import './Users.css'

const Users = props =>{

    useEffect(() =>{ //hacer lo mismo que componentDidMount
        console.log('componente ya montado')
        getAllUsers();
        // return ()=> {
        //     console.log('componente se va a desmontar') //hacer lo mismo que componentWillUnmount
        // }
    }, []) //sin [] es componentDidUpdate. la [] es componentDidMount. si no usas el return hay be poner [], porque va a update siempre
        

    
        return (
            <div className="users">
                Estos son los usuarios:
                    {props.users && props.users.map(user => //1.si no hay usuarios en users - devuelve un falsy ie undefined 2.con users para map
                    (
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <span>{user.email}</span>
                        <span>{user.createdAt}</span>
                    </div>
                    )
                )}
            </div>
        )
    
}



     


const mapStateToProps = state =>{
    return {
        users: state.userReducer.allUsers
    }
}

export default connect(mapStateToProps)(Users)