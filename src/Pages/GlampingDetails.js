import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlampingDetails } from '../store/actions/glampingActions';
import '../assets/GlampingDetails.css';

const GlampingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const glampingDetails = useSelector((state) => state.glampings.glampingDetails);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(fetchGlampingDetails(id));
  }, [dispatch, id]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!glampingDetails) {
    return <div className="spinner" />;
  }

  return (
    <div className="glamping-details">
      <h1 className="glamping-name-details-mobile">{glampingDetails.name}</h1>
      <div className="glamping-image-table-container">
        <div className="glamping-image-container">
          <img src={glampingDetails.image} alt={glampingDetails.name} className="glamping-image-details" />
        </div>
        <div className="glamping-details-container">
          <h1 className="glamping-name-details">{glampingDetails.name}</h1>
          <table className="glamping-details-table">
            <tbody>
              <tr>
                <th>Type</th>
                <td>{glampingDetails.glamping_type}</td>
              </tr>
              <tr>
                <th>Daily Rate</th>
                <td>{glampingDetails.daily_rate}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{glampingDetails.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="glamping-description">{glampingDetails.description}</p>
      <div className="button-container">
        {username !== 'guest' && (
          <Link
            to={{
              pathname: '/reserve',
              state: { glampingDetails },
            }}
          >
            <button type="button" className="reserve-button">Reserve</button>
          </Link>
        )}
      </div>
      <div className="previous-button-container">
        <button aria-label="Previous" className="arrow arrow-left previous-button" type="button" onClick={handleGoBack}>
          &#8249;
        </button>
      </div>
    </div>
  );
};

export default GlampingDetails;
