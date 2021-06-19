import {Get_customers,Customers_NotFound, Get_Customer, Profile_Error} from '../Actions/types';

const initialState ={
    customer: null,
    customers:[],
    loading :true
};

function customerReducer(state = initialState,action){

    const {type, payload} = action;

    switch (type) {
        case Get_customers:
            return{
                ...state,
                customers: payload,
                loading: false
            };   
        case Customers_NotFound:
            return{
                ...state,
                customers : null,
                loading : false
            };
        case Get_Customer:
            return{
                ...state,
                customer: payload,
                loading: false
            }; 
        case Profile_Error:
            return{
                ...state,
                customer : null,
                loading : false
            };
        default:
            return state;
    }
}

export default customerReducer;