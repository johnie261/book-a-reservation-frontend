import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchReservations from '../store/actions/reservationActions';
import LoginReservation from '../Components/LoginReservation';

const Reservations = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const reservations = useSelector((state) => state.reservations.reservations);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== 'guest') {
      dispatch(fetchReservations(username));
    }
  }, [dispatch, username, navigate]);

  if (username === 'guest') {
    return (
      <div>
        <LoginReservation />
      </div>
    );
  }

  if (reservations.length === 0) {
    return <h2>You dont have any reservations yet.</h2>;
  }

  return (
    <div>
      <h2>
        Reservations for
        {' '}
        {username}
      </h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation[0]}>
            Reservation Date:
            {' '}
            {reservation[0]}
            , Due Date:
            {' '}
            {reservation[1]}
            , Service Fee: $
            {reservation[2]}
            , Glamping ID:
            {' '}
            {reservation[4]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
