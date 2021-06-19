import axios from "axios";
import {Get_Transactions, No_Transactions} from './types';

export const getHistory = () => async (dispatch) => {
    try {
      const res = await axios.get('https://evening-reaches-47967.herokuapp.com/transactions/history');
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