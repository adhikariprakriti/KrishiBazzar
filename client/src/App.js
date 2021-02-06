import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"; 
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import DashboardHome from './Pages/DashboardHome/DashboardHome';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SellerProfile from './Pages/SellerProfile/SellerProfile';
import Message from './Pages/Message/Message';
import SingleMessage from './Pages/Message/SingleMessage/SingleMessage'
import Home from './Pages/Home/Home'
import PostOffer from './Pages/PostOffer/PostOffer';
import Offers from './Pages/Offers/Offers';
import Top from './Pages/Top/Top';

 function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
          <Route path='/' component={Home} exact/> 
              <Route path='/dashboard' component={DashboardHome} exact/> 
              <Route path='/singleProduct' component={SingleProduct} exact/>           
              <Route path='/login' component={Login} exact/>
              <Route path='/registration' component={Registration} exact/>
              <Route path='/sellerProfile' component={SellerProfile} exact/> 
              <Route path='/message' component={Message} exact/> 
              <Route path='/message/userid' component={SingleMessage} exact/> 
              <Route path='/postoffer' component={PostOffer} exact/>
              <Route path='/selleroffer' component={Offers} exact/>
              <Route path='/topseller' component={Top} exact/>

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
