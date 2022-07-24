import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import  { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';







import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';
import React, { useEffect } from "react";

import {Login} from './components/Login';
import {ShowPosts} from './components/ShowPosts';
import {AddPosts} from './components/AddPosts';
import {Nav_admin} from './components/Nav_admin';
import {Nav_staff, staff} from './components/Nav_staff';
import {Display} from "./components/Display"
import {Add_staff} from "./components/Add_staff"
import {Remove_staff} from "./components/Remove_staff"
import {Post} from "./components/Post"
import { Update_staff } from './components/Update_Staff';
import {Add_customer} from "./components/Add_customer"
import {Remove_customer} from "./components/Remove_customer"
import { Update_customer } from './components/Update_customer';
import { Display_customer } from './components/Display_customer';

function App() {  
  
  
  const [change, setChange] = useState(0);
  const [changeCust, setChangeCust] = useState(0);
  const [token,setToken] = useState(false);
  const [status,setStatus] = useState('');
  const [getList, setList] = useState([]);
  const [getListCust, setListCust] = useState([]);
  const [user,setUser] = useState('');

  
  useEffect(() => {   {fetch('http://localhost:8000/data').then
  (response => response.json()).then
  (response => setList(response))}; },[change]);

  useEffect(() => {   {fetch('http://localhost:8000/datacust').then
  (response => response.json()).then
  (response => setListCust(response))}; },[changeCust]);

  const handler = (e) => {
    e.preventDefault();
    if(token == false){
      alert("Already logged out")
    }
    else{
    alert("logged out");
    setToken(false);}
    
  
  }



  

  
  
  return (

    

    
    <div className="App">

<Router>
{
                !token
                ? <></>
                :    user == 'admin'
                ?  <Nav_admin user = {'admin'}/> 
                : <Nav_admin user = {'staff'}/>   
               
           
          }
                

    
      <header className="App-header">
      
        
        
        
         
        {/* <Link to="/showPosts">  <button> Display Customer Posts </button> </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link> */}

            {
                !token
                ? <Login set = {setToken} user = {setUser}/>
                : 
              
             
         <Routes>
         
         <Route exact path='/' element={<Login set = {token} user = {setUser}/>} />
         <Route path="/admin" element={<Display get = {getList} gett = {getListCust} />} />
         <Route path="/staff" element={<Display_customer get = {getListCust} />} />
         <Route path="/Addstaff" element={ <Add_staff set = {setChange}/> } />
         <Route path="/Removestaff" element={ <Remove_staff  set = {setChange}  /> } />
         <Route path="/Updatestaff" element={ <Update_staff set = {setChange} /> } />
         <Route path="/Displaystaff" element={ <Display get = {getList} gett = {getListCust} bool = {0} /> } />
         <Route path="/Addcustomer" element={ <Add_customer set = {setChangeCust}/> } />
         <Route path="/Removecustomer" element={ <Remove_customer set = {setChangeCust} /> } />
         <Route path="/Updatecustomer" element={ <Update_customer  set = {setChangeCust} /> } />
         <Route path="/Displaycustomer" element={ <Display_customer get = {getListCust}  /> } />
        
       
           </Routes>}
         
        
        

        {
                token
                ? <button onClick = {handler}> logout </button>
                : <></>}
        
      </header>
      </Router>
      </div>
  );
}

export default App;

