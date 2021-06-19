import React,{Fragment,useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spinner';
import { getCustomer } from "../Actions/customers.js";
import Profile from './Profileitem';

const ViewCustomer = ({ getCustomer, customer:{ customer, loading}, match}) => {

    useEffect(()=>{
      getCustomer(match.params.id);
    }, [getCustomer, match.params.id]);
  
    return (
      <Fragment>
      {loading? (
        <Spinner />
      ):(
        <Fragment>
          <div className="container">
          <h1 className='lead' style={{textAlign: 'center'}}> Customer Profile</h1>
            {customer==null ?(
                <h4> Cannot Get Profile </h4>
            ):(
             <Profile customer={customer} />
            )}
            </div>
        </Fragment>
      )}
      </Fragment>
    );
  };
  
  ViewCustomer.propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer:  PropTypes.object.isRequired
  };
  
  const mapStateToProps = state =>({
    customer: state.customer
  });
  
  export default connect (mapStateToProps, { getCustomer})(ViewCustomer);