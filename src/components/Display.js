import React from 'react';
import {Nav_admin} from './Nav_admin';
import {Post} from "./Post";
import './Display.css'
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap';

export const Display = (props) => {

return (

<div >


<Container>
<Row>
<Col> 
<div className='Display-div'>  
<h1 className='head'>   Staff members found: </h1>
 {props.get.map(post => (
   <Post   ID={post.ID} fname={post.First_Name} lname = {post.Last_Name} address={post.Address} role={post.role} date={post.Date}/>
))}
</div>  
</Col> 




<Col>
<div className='Display-div'>
<h1 className='head'>   Customers found: </h1>
 {props.gett.map(post => (
   <Post  ID={post.ID} fname={post.First_Name} lname = {post.Last_Name} address={post.Address}  date={post.Date}/>
))}
</div>
</Col>
</Row>

</Container>
           

        
        
        
      </div>

);


}