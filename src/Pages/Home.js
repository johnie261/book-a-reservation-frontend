import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlampings } from '../store/actions/glampingActions';
import '../assets/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  // const glampingsList = useSelector((state) => state.glampings.glampingsList);
  const {isLoading, glampingsList} = useSelector((state) => state.glampings)
  console.log(glampingsList)
  console.log(isLoading)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchGlampings());
  }, [dispatch]);

  if(isLoading) {
    return <div className="spinner"></div>
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : glampingsList.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < glampingsList.length - 3 ? prevIndex + 1 : 0));
  };

  const visibleGlampings = glampingsList.slice(currentIndex, currentIndex + 3);

  return (
    <div className="glamping-list">
      <h1>Glampings</h1>
      <h4>Please select a glamping.</h4>
      <div className="glamping-carousel">
        {visibleGlampings.map((glamping) => (
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
      <div className="carousel-navigation">
        <button aria-label="Previous" className="arrow arrow-left" type="button" onClick={handlePrev}>
          &#8249;
        </button>
        <button aria-label="Next" className="arrow arrow-right" type="button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Home;
