import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import Layout from './Pages/Layout';
import Reserve from './Pages/Reserve';
import AddItem from './Pages/AddItem';
import DeleteItem from './Pages/DeleteItem';
import GlampingDetails from './Pages/GlampingDetails';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';

function App() {
  const username = useSelector((state) => state.user.username);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={username ? <Layout /> : <LandingPage />}
        >
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/delete-item" element={<DeleteItem />} />
          <Route path="/glamping/:id" element={<GlampingDetails />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
