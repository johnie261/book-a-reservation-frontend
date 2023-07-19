import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlampings } from '../store/actions/glampingActions';

const Home = () => {
  const dispatch = useDispatch();
  const glampingsList = useSelector((state) => state.glampings.glampingsList);

  useEffect(() => {
    dispatch(fetchGlampings());
  }, [dispatch]);

  return (
    <div className="glamping-list">
      <h1>Glampings</h1>
      <h4>Please select a glamping.</h4>
      <div className="glamping-carousel">
        {glampingsList.map((glamping) => (
          <div className="glamping-item" key={glamping[0]}>
            <Link to={`/glamping/${glamping[0]}`}>
              {' '}
              <img src={glamping[3]} alt={glamping[1]} className="glamping-image" />
            </Link>
            <p className="glamping-name">{glamping[1]}</p>
            <p className="glamping-type">{glamping[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
