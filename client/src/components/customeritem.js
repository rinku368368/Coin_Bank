import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const CustomerItem = ({
    customer:{
        _id,
        name,
        email,
        Balance
    }
}) => {
    return (
        <tbody className='table_body'>
            <tr>
            <td>{name}</td>
            <td>{email} </td>
            <td>{Balance} </td>
            <Link to={`/viewcustomers/${_id}`} style={{textDecoration: 'none'}}>
            <Button variant="outline-info">View</Button>
            </Link>
            </tr>
        </tbody>

    )
}

CustomerItem.propTypes = {
    customer: PropTypes.object.isRequired
};


export default CustomerItem;
