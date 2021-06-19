import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postTransaction } from '../Actions/transaction';
import { getCustomers } from "../Actions/customers.js"
import { getCustomer } from "../Actions/customers.js";
import PropTypes from 'prop-types';
import { Form, Col, Row, Button} from 'react-bootstrap';

const Transaction = ({ postTransaction, getCustomer,getCustomers,message,customer:{customer,customers},match}) => {
  const [formData, setFormData] = useState({
    sender:'',
    receiver:'',
    amount:''
  });

  useEffect(()=>{
    getCustomer(match.params.id);
    getCustomers()
  }, [getCustomer,getCustomers, match.params.id]);

  const {amount} = formData;

  var Sender = customer.name;

  const onChange = (e) =>
    setFormData({ ...formData, sender:Sender, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    postTransaction(formData);
  };

  return (
    <Fragment>
      <div className="container">
      <h1 className="text-primary lead"> Transaction </h1>
      <Form className="form" onSubmit={onSubmit}>
        <Form.Group as={Row}>
        <Form.Label column sm={2}>Transfer From</Form.Label>
        <Col sm='10'>
        <Form.Control
            type="text"
            placeholder= {Sender}
            readOnly
          defaultValue={Sender}
          />
        </Col> 
        </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>Transfer To</Form.Label>
            <Col sm='10'>
            <Form.Control as="select"placeholder="receiver" required name="receiver" onChange={onChange}  >
              <option>Please Select the person </option>
              {customers.length>0 ?(
                customers.filter(c=> c.name !== Sender).map(c =>(
            <option value={c.name} key={customer._id}>{c.name}</option>
          ))
        ) : (
          <option value='not found'>Not Found</option>
        )}
            </Form.Control>
            </Col>
          </Form.Group>
        <Form.Group as={Row}>
        <Form.Label column sm={2}>Amount</Form.Label>
        <Col sm='10'>
          <Form.Control
            type="text"
            required
            name="amount"
            value={amount}
            onChange={onChange}
          />
          </Col>
        </Form.Group>
        <Button type="submit"> Transfer</Button>
        </Form>
        </div>
    </Fragment>
  );
};

Transaction.propTypes = {
  postTransaction: PropTypes.func.isRequired,
  getCustomer: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  customer:  PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state =>({
  customer: state.customer,
  message: state.message
});
export default connect(mapStateToProps,{ postTransaction,getCustomer, getCustomers })(Transaction);