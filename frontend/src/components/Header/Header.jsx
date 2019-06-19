import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const Header =props=>{
  return (
    <div>
      {/* <li> <NavLink className="navLink" activeClassName="is-active" to="/about/">About</NavLink></li>
      <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">Users</NavLink></li> */}
      
      <span> <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink> </span>

      {props.user ? 
      <div>
        {props.user.name}
        {props.user.email}
        <span> <NavLink className="navLink" activeClassName="is-active" to="/logout/">Log Out</NavLink></span> 
      </div> :
      <div>
        <span> <NavLink className="navLink" activeClassName="is-active" to="/users/">Users</NavLink></span>
        <span> <NavLink className="navLink" activeClassName="is-active" to="/register/">Register</NavLink></span>
        <span> <NavLink className="navLink" activeClassName="is-active" to="/login/">Login</NavLink></span> 
      </div>
      }
    </div>
)};

const mapStateToProps = (state) => {
  return {user: state.userReducer.user} //ahora tengo un prop -> user -> que tiene los datos/propiedades del state.userReducer.user del store
}

//alternate way to map store to component
// const mapStateToProps = ({user}) => {
//   return {
//     user
// }

export default connect(mapStateToProps)(Header);