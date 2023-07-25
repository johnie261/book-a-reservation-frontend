import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createReservation, handleChange } from '../Features/reservation/reservationSlice';
import LoginReservation from '../Components/LoginReservation';
import '../assets/Reserve.css';

const Reserve = () => {
  const [formattedReservationDate, setFormattedReservationDate] = useState('');
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.userId);
  const glampingsList = useSelector((state) => state.glampings.glampingsList);
  const {
    isLoading, reservationDate, city, selectedGlampingId,
  } = useSelector(
    (store) => store.reservationForm,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!reservationDate || !city || !selectedGlampingId) {
      toast.error('Please fill out all fields');
      return;
    }
    try {
      const response = await dispatch(
        createReservation({
          reservation_date: formattedReservationDate,
          due_date: reservationDate,
          service_fee: 0,
          user_id: userId,
          glamping_id: selectedGlampingId,
          city,
        }),
      );
      if (response.status === 200) {
        navigate('/reservations');
      }
    } catch (error) {
      toast.error('Error');
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
    <div className="reserve-container">
      <div className='reserve-box'>
      <h2 className="reserve-name">CREATE NEW RESERVATION</h2>
      <div className="underline" />
      <form onSubmit={handleSubmitForm}>
        <div className="reserve-item">
        <label htmlFor="username" className="reserve-label">
          Username:
          <input type="text" id="username" name="username" value={username} readOnly className="reserve-input" />
        </label>
        <label htmlFor="glamping" className="reserve-label">
          Glamping:
          <select
            id="glamping"
            name="selectedGlampingId"
            value={selectedGlampingId}
            onChange={handleInput}
            className="reserve-input select"
          >
            <option value="">Select a Glamping</option>
            {glampingsList.map((glamping) => (
              <option key={glamping[0]} value={glamping[0]}>
                {glamping[1]}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="reservationDate" className="reserve-label">
          Reservation Date:
          <input
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={reservationDate}
            onChange={(e) => {
              setFormattedReservationDate(e.target.value.split('-').reverse().join('-'));
              handleInput(e);
            }}
            className="reserve-input"
          />
        </label>
        <label htmlFor="city" className="reserve-label">
          City:
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleInput}
            className="reserve-input"
          />
        </label>
        </div>
        <div className="btn-container">
          <button type="submit" className="reserve-btn">
            {isLoading ? 'Loading..' : 'Create a Reservation'}
          </button>
        </div>
      </form>
      
      </div>
    </div>
  );
};

export default Reserve;
