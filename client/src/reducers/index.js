import { combineReducers} from 'redux';
import customer from './customer.js';
import history from './history.js'; 
import transaction from './transaction.js';

export default combineReducers({
    customer,
    history,
    transaction
});