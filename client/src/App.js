import React,{Fragment} from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Landing from './components/Landing';
import ViewCustomers from './components/ViewCustomers';
import History from './components/history';
import ViewCustomer from './components/ViewCustomer';
import Transaction from './components/Transaction';
import Footer from './components/footer';

import {Provider} from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App =() =>(
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
            <section>
              <Switch>
                <Route exact path="/viewCustomers" component={ViewCustomers} />
                <Route exact path="/history" component={History} />
                <Route exact path="/viewcustomers/:id" component={ViewCustomer} />
                <Route exact path="/viewcustomers/:id/transaction" component={Transaction} />
              </Switch>
            </section>
          <Footer />
        </Fragment>
      </Router>
      </Provider>
  );


export default App;
