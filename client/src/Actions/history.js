import axios from "axios";
import {Get_Transactions, No_Transactions} from './types';

export const getHistory = () => async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:5000/transactions/history');
      dispatch({
        type: Get_Transactions,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type:  No_Transactions,
        payload: { msg: "No Transaction to show" }
      });
    }
  };