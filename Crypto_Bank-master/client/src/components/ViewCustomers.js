import React,{Fragment,useEffect} from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spinner';
import CustomerItem from './customeritem';
import { getCustomers } from "../Actions/customers.js"


const ViewCustomers = ({ getCustomers, customer:{ customers, loading}}) => {

  useEffect(()=>{
    getCustomers();
  }, [getCustomers]);

  return (
    <Fragment>
    {loading? (
      <Spinner />
    ):(
      <Fragment> 
      <div className="container">
      <h1 className='lead'>Customer Details</h1>
    <Table hover>
      <thead className='table_header'>
        <tr>
          <th>Name of Customer</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Profile</th>
        </tr>
      </thead>
      
        {customers.length>0 ?(
          customers.map(customer =>(
            <CustomerItem key ={customer._id} customer={customer} />
          ))
        ) : (
          <h4> No profile found </h4>
        )}
    </Table>
    </div>
      </Fragment>
    )}
    </Fragment>
  );
};

ViewCustomers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer:  PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  customer: state.customer
});

export default connect (mapStateToProps, { getCustomers})(ViewCustomers);