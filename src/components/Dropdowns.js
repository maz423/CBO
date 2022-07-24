import React, { Component } from 'react';
import {Post} from "./Post";
import {  Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Dropdowns = (props) => {

    

return (


  

   
<Nav>


{(() => {
        switch (props.name) {
          case 'Add':
            return (<NavDropdown
              id="nav-dropdown-dark-example"
              title={props.name}
              menuVariant="dark">
              <NavDropdown.Item as={Link} to="/Addstaff">Add Staff</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Addcustomer">
               Add Customer
              </NavDropdown.Item>
              </NavDropdown>)
          case 'Remove':
            return (<NavDropdown
              id="nav-dropdown-dark-example"
              title={props.name}
              menuVariant="dark"
            >

                 <NavDropdown.Item as={Link} to="/Removestaff">Remove Staff</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Removecustomer">
                 Remove Customer
                </NavDropdown.Item>
                </NavDropdown>)
          case 'Update':
            return (<NavDropdown
              id="nav-dropdown-dark-example"
              title={props.name}
              menuVariant="dark"
            >

                 <NavDropdown.Item as={Link} to="/Updatestaff">Update Staff</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Updatecustomer">
                 Update Customer
                </NavDropdown.Item>
                </NavDropdown>)

          case 'Add_staff':
              return (<NavDropdown
                id="nav-dropdown-dark-example"
                title="Add"
                menuVariant="dark"
              >
  
                   
                   <NavDropdown.Item as={Link} to="/Addcustomer">
                   Add Customer
                  </NavDropdown.Item>
                  </NavDropdown>)
          case 'Remove_staff':
                return (<NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Remove"
                  menuVariant="dark"
                >
    
                     
                      <NavDropdown.Item as={Link} to="/Removecustomer">
                     Remove Customer
                    </NavDropdown.Item>
                    </NavDropdown>)
          case 'Update_staff':
                  return (<NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Update"
                    menuVariant="dark"
                  >
      
                       
                        <NavDropdown.Item as={Link} to="/Updatecustomer">
                       Update Customer
                      </NavDropdown.Item>
                      </NavDropdown>)
          case 'Display':
            return (<NavDropdown
              id="nav-dropdown-dark-example"
              title="Display"
              menuVariant="dark"
            >

                 
                  <NavDropdown.Item as={Link} to="/Displaystaff">
                 Display Staff
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Displaycustomer">
                 Display Customer
                </NavDropdown.Item>

                </NavDropdown>
                
                )
          
          
          default:
            return null
        }
      })()}

            
              
              
              
              
            
          </Nav>


);


}