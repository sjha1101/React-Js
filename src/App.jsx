import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUp';
import Login from './Login';
import HomePage from './homepage/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
