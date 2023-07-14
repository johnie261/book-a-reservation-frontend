import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Reservations from './Pages/Reservations';
import Layout from './Pages/Layout';
import Reserve from './Pages/Reserve';
import AddItem from './Pages/AddItem';
import DeleteItem from './Pages/DeleteItem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/delete-item" element={<DeleteItem />} />
      </Route>
    </Routes>
  );
}

export default App;
