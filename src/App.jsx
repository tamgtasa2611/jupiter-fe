import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './pages/layouts/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/customer/Home';
import About from './pages/customer/About';
import CustomerLayout from './pages/layouts/CustomerLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes  */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin Authorization */}
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" />
        </Route>

        {/* Customer Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
