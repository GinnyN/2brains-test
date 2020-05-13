import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from "@reach/router";
import { Spinner } from "react-bootstrap";
import SignIn from "./auth/signin";
import List from "./list/list";
import { auth } from "./firebase/firebase";
import './App.css';
import { login } from './actions/actions';

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  auth.getRedirectResult().then((userAuth) => {
    if (userAuth.user && !user.uid) {
      dispatch(login(userAuth.user));
    }
    if(loading) setLoading(false);
  });
  return (
    <div className="App">
      { loading ? <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> :
      <Router>
        { user.uid ?
          <List path="/" />
          :
          <SignIn path="/" />
        }
      </Router> }
    </div>
  );
}

export default App;
