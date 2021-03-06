import React from 'react';
import './App.css';
import { Login, MessagePage, Friend } from './containers/index'
import {
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/MessagePage" component={MessagePage} />
      <Route path="/Friend" component={Friend} />
      </BrowserRouter>
    </div>
  );
}

export default App;
