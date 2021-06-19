import {Get_Transactions, No_Transactions} from '../Actions/types';

const initialState ={
    historyList:[],
    loading :true
};

function historyReducer(state = initialState,action){

    const {type, payload} = action;

    switch (type) {
        case Get_Transactions:
            return{
                ...state,
                historyList: payload,
                loading: false
            };   
        case No_Transactions:
            return{
                ...state,
                historyList : null,
                loading : false
            };
        default:
            return state;
    }
}

export default historyReducer;