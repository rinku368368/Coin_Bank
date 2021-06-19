import React,{Fragment,useEffect} from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spinner';
import HistoryItem from './historyitem';
import { getHistory } from "../Actions/history.js"


const History = ({ getHistory, history:{ historyList, loading}}) => {

  useEffect(()=>{
    getHistory();
  }, [getHistory]);

  return (
    <Fragment>
    {loading? (
      <Spinner />
    ):(
      <Fragment> 
      <div className="container">
      <h1 className='lead'>Transaction History</h1>
    <Table hover>
      <thead className='table_header'>
        <tr>
          <th>Transfered From</th>
          <th>Transferred to</th>
          <th>Amount</th>
        </tr>
      </thead>
        {historyList.length>0 ?(
          historyList.map(h =>(
            <HistoryItem key ={h._id} history={h} />
          ))
        ) : (
          <h4> No Transactions  found </h4>
        )}
    </Table>
    </div>                                                                                    
      </Fragment>
    )}
    </Fragment>
  );
};

History.propTypes = {
  getHistory: PropTypes.func.isRequired,
  history:  PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  history: state.history
});

export default connect (mapStateToProps, { getHistory})(History);