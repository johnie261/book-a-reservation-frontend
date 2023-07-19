import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import Layout from './Pages/Layout';
import Reserve from './Pages/Reserve';
import AddItem from './Pages/AddItem';
import DeleteItem from './Pages/DeleteItem';
import GlampingDetails from './Pages/GlampingDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
