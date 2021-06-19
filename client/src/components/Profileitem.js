import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Card, Button, CardText } from 'reactstrap';


const Profile =({
    customer:{
        _id,
        name,
        email,
        Balance
    }
}) =>{
    return(
        <div className='Profile_item'>
        <Card>
          <CardText>
              <p>Account Holder: {name}</p>
              <p>Email: {email}</p>
              <p> Balance: <i class="fas fa-rupee-sign"></i> {Balance}</p>
          </CardText>
          <Button ><Link to ={`/viewCustomers/${_id}/transaction`} style={{textDecoration: 'none', color:"#fff"}} className='profile_button'> Transfer Funds</Link></Button>
        </Card>
      </div>
    );
  };
  

Profile.propTypes = {
    customer: PropTypes.object.isRequired
};


export default Profile;

