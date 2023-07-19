import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlampingDetails } from '../store/actions/glampingActions';

const GlampingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const glampingDetails = useSelector((state) => state.glampings.glampingDetails);

  useEffect(() => {
    dispatch(fetchGlampingDetails(id));
  }, [dispatch, id]);

  if (!glampingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="glamping-details">
      <div className="glamping-image-container">
        <img src={glampingDetails.image} alt={glampingDetails.name} className="glamping-image-details" />
        <p>{glampingDetails.description}</p>
      </div>
      <div className="glamping-details-container">
        <h1 className="glamping-name-details">{glampingDetails.name}</h1>
        <p>{glampingDetails.glamping_type}</p>
        <p>
          Daily Rate:
          {' '}
          {glampingDetails.daily_rate}
        </p>
        <p>
          Location:
          {' '}
          {glampingDetails.location}
        </p>
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
  );
};

export default GlampingDetails;