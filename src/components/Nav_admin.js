import './Nav_admin.css';


import { Dropdown, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


import {ShowPosts} from './ShowPosts';
import {AddPosts} from './AddPosts';
import {admin} from './Nav_admin';
import {staff} from './Nav_staff';
import {Post} from "./Post"
import Button from 'react-bootstrap/Button'
import { Dropdowns } from './Dropdowns';

export const Nav_admin = (props) => {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

return (


<div className="Nav_admin">

<Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
    
    <Navbar.Brand className='logo' ><h1  initial={{y:-250}} animate={{y:0, color:'#ef8568'}} transition={{delay:1}} className='txt'>Addiction Council</h1></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

        { props.user == 'admin'

          ? <Nav className="me-auto" id='navbar' >
          <Nav.Link as={Link} to='/admin'>Home</Nav.Link>
          <div whileHover={{y:-5,scale : 1.3}}>
          
          <Dropdowns name= {"Add"} class={"admin"}/>
          </div>
          <div whileHover={{y:-5,scale : 1.3}}>
          
          <Dropdowns name= {"Remove"} class= {"admin"}/>
          </div>
          <div whileHover={{y:-5,scale : 1.3}}>
          
          <Dropdowns name= {"Update"} class= {"admin"} />
          
          </div>
          <div>
          <Dropdowns name= {"Display"}  />
          </div>
         </Nav>

          : 
          <Nav className="me-auto" id='navbar' >
          <Nav.Link as={Link} to='/admin'>Home</Nav.Link>
          <div whileHover={{y:-5,scale : 1.3}}>
       
          <Dropdowns name= {"Add_staff"} />
          </div>
          <div whileHover={{y:-5,scale : 1.3}}>
       
          <Dropdowns name= {"Remove_staff"} />
          </div>
          <div whileHover={{y:-5,scale : 1.3}}>
       
          <Dropdowns name= {"Update_staff"}  />
          
          </div>
          <div>
          <Dropdowns name= {"Display"}  />
          </div>
          
          </Nav>
          


        }
      
      

      
     
      <Nav>
        
        <div whileHover={{y:-5,scale : 1.3}}>
        <Nav.Link eventKey={2} href="#memes" onClick={handleShow}>
          Contact us
        </Nav.Link>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact information</Modal.Title>
        </Modal.Header>
        <Modal.Body> Email: Mohammad.Zargar@usask.ca<br></br>
                     Phone: +1 306-221-1921<br></br>
                     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
      </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>



    
{/* <header className="Nav_admin-header">

        
        <Link to="/Addstaff">  <button className='b1'> Add Staff </button> </Link>
        <Link to="/Removestaff">  <button> Remove Staff </button> </Link>
        <Link to="/Updatestaff">  <button> Update Staff  </button>   </Link>
        <Link to="/Displaystaff">  <button> Display Staff </button>   </Link>
        <Link to="/Addcustomer">  <button className='b1'> Add Cutsomer </button> </Link>
        <Link to="/Removecustomer">  <button> Remove Customer </button> </Link>
        <Link to="/Updatecustomer">  <button> Update Customer  </button>   </Link>
        <Link to="/Displaycustomer">  <button> Display Customer </button>   </Link>
       


</header> */}


</div> 


);


}