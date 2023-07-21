import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import ModalSidebar from '../Components/ModalSidebar';

const Layout = () => (
  <div className="layout">
    <Sidebar />
    <ModalSidebar />
    <main className="outlet">
      <Outlet />
    </main>
  </div>
);

export default Layout;
