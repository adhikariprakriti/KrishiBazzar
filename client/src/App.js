import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"; 
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import DashboardHome from './Pages/DashboardHome/DashboardHome';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>  
              <Route path='/dashboard' component={DashboardHome} exact/> 
              <Route path='/singleProduct' component={SingleProduct} exact/>           
              <Route path='/login' component={Login} exact/>
              <Route path='/registration' component={Registration} exact/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
