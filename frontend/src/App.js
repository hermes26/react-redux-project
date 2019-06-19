import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header.jsx';
import Index from './views/Index/Index.jsx'
import Register from './views/User/Register/Register.jsx';
import Login from './views/User/Login/Login.jsx';
import Error from './components/Error/Error.jsx'
import Users from './views/User/Users/Users'

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register/"  component={Register} />
        <Route path="/login/"  component={  Login } />
        <Route path="/users/"  component={  Users } />

        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;