import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const Layout = () => (
  <div className="layout">
    <Sidebar />
    <main className="outlet">
      <Outlet />
    </main>
  </div>
);

export default Layout;
