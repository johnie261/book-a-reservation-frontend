import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchReservations from '../store/actions/reservationActions';
import LoginReservation from '../Components/LoginReservation';
import '../assets/Reservations.css';

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
    <div className="reservation-container">
      <div className="reservation-list">
        <h2 className="reservation-title">
          RESERVATIONS FOR
          {' '}
          {username.toUpperCase()}
        </h2>
        <div className="underline" />
        <div className="reservation-cards">
          {reservations.map((reservation) => (
            <div key={reservation[0]} className="reservation-card">
              <table className="reservation-table">
                <tbody>
                  <tr>
                    <td>Glamping Name:</td>
                    <td>{reservation.glampingName}</td>
                  </tr>
                  <tr>
                    <td>Glamping City:</td>
                    <td>{reservation.glampingCity}</td>
                  </tr>
                  <tr>
                    <td>Reservation Date:</td>
                    <td>{reservation[0]}</td>
                  </tr>
                  <tr>
                    <td>Service Fee:</td>
                    <td>
                      $
                      {reservation[2]}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
