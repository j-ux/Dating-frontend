import React from 'react';
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Login from './login'



import Home from './Home'
import Contact from './Contact'
import Header from './components/users/header'
import Footer from './components/users/footer'
import NotFound from './components/users/404'

import MaleList from './components/males/pages/list'
import MaleShow from './components/males/pages/show'
import MaleCreate from './components/males/pages/create'
import MaleUpdate from './components/males/pages/update'

import FemaleList from './components/females/pages/list'
import FemaleShow from './components/females/pages/show'
import FemaleCreate from './components/females/pages/create'
import FemaleUpdate from './components/females/pages/update'

function App() {



  return (
      <div>

        <Router>



          <Header/>
          <br/>
          <br/>


          <Switch>

              <Route path="/login" exact>
                  <Login/>
              </Route>
              <Route path="/Contact" exact>
                  <Contact/>
              </Route>


              <Route path="/" exact >
                <Home/>
            </Route>

            <Route path="/females/" exact>
              <FemaleList/>
            </Route>

            <Route path="/females/create" exact>
              <FemaleCreate/>
            </Route>

            <Route path="/females/:id/show" exact >
              <FemaleShow/>
            </Route>



            <Route path="/females/update/:id" exact>
              <FemaleUpdate/>
            </Route>

            <Route path="/males" component={MaleList} exact/>
            <Route path="/male/:id/show" component={MaleShow} exact/>
            <Route path="/male/create" component={MaleCreate} exact/>
            <Route path="/male/update/:id" component={MaleUpdate} exact/>


            <Route path="/404" component={NotFound} exact/>

            <Redirect to="/404" />


          </Switch>


        </Router>

        <br/>
        <br/> <br/>
        <br/>

        <Footer/>


      </div>
  );
}

export default App;
