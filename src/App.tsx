import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import AddItem from './pages/AddItem';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;
