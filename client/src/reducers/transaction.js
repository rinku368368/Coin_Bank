import { Transaction_Fail,Transaction_Success } from '../Actions/types';

const initialState ={
    loading: true,
    message:''
};

export default function transactionReducer(state=initialState, action){
    const {type,payload} = action;
    console.log(payload);
    switch(type){
        case Transaction_Success:
            return {
                ...state,
                message:payload,
                loading: false
            };
        case Transaction_Fail:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    }
}