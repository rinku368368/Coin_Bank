import axios from "axios";
import {Get_customers,Customers_NotFound,Get_Customer, Profile_Error} from './types';

export const getCustomers = () => async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:5000/customer');
      dispatch({
        type: Get_customers,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: Customers_NotFound,
        payload: { msg: "No Customers to show" }
      });
    }
  };

  export const getCustomer = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/customer/${id}`);

      dispatch({
        type: Get_Customer,
        payload: res.data
      });
      
    } catch (error) {
      dispatch({
        type: Profile_Error,
        payload: { msg: "Error Occured to get customer" }
      });
    }
  };

  