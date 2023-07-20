import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginReservation from '../Components/LoginReservation';

const Reserve = () => {
  const [reservationDate, setReservationDate] = useState('');
  const [city, setCity] = useState('');
  const [selectedGlampingId, setSelectedGlampingId] = useState(null);
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.userId);
  const glampingsList = useSelector((state) => state.glampings.glampingsList);
  const navigate = useNavigate();
  const dueDate = reservationDate;
  const serviceFee = 0;
  const formattedReservationDate = reservationDate.split('-').reverse().join('-');

  const handleReservationSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/reservations/create', {
        reservation_date: formattedReservationDate,
        due_date: dueDate,
        service_fee: serviceFee,
        user_id: userId,
        glamping_id: selectedGlampingId,
        city,
      });

      console.log('Response from server:', response.data);

      if (response.status === 200) {
        navigate('/reservations');
      } else {
        alert('Error al crear la reserva. Por favor, intenta de nuevo más tarde.');
      }
    } catch (error) {
      alert('Ha ocurrido un error en el servidor. Por favor, intenta de nuevo más tarde.');
      console.error(error);
    }
  };

  if (username === 'guest') {
    return (
      <div>
        <LoginReservation />
      </div>
    );
  }

  return (
    <div>
      {!username && (
        <div>
          <LoginReservation />
        </div>
      )}

      {username && (
        <div>
          <h2>Reserve a glamping</h2>
          <form onSubmit={handleReservationSubmit}>
            <div>
              <label htmlFor="username">
                Username
                <input type="text" id="username" name="username" value={username} readOnly />
              </label>
            </div>
            <div>
              <label htmlFor="glamping">
                Glamping
                <select
                  id="glamping"
                  name="glamping"
                  value={selectedGlampingId}
                  onChange={(e) => setSelectedGlampingId(e.target.value)}
                >
                  <option value="">Select a Glamping</option>
                  {glampingsList.map((glamping) => (
                    <option key={glamping[0]} value={glamping[0]}>
                      {glamping[1]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="reservationDate">
                Reservation Date
                <input
                  type="date"
                  id="reservationDate"
                  name="reservationDate"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                City
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Reserve</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reserve;
