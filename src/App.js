import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/*change on the main code*/}
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;