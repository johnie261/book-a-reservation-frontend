import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlampings } from '../store/actions/glampingActions';
import '../assets/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, glampingsList } = useSelector((state) => state.glampings);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const isMobileView = window.innerWidth <= 768;

  useEffect(() => {
    dispatch(fetchGlampings());
  }, [dispatch]);

  if (isLoading) {
    return <div className="spinner" />;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : glampingsList.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < glampingsList.length - 3 ? prevIndex + 1 : 0));
  };

  const handlePrevMobile = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : glampingsList.length - 1));
  };

  const handleNextMobile = () => {
    setCurrentIndex((prevIndex) => (prevIndex < glampingsList.length - 1 ? prevIndex + 1 : 0));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const touchDelta = touchEndX - touchStartX;
      if (touchDelta > 0) {
        handlePrevMobile();
      } else if (touchDelta < 0) {
        handleNextMobile();
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  };

  const visibleGlampings = isMobileView ? glampingsList.slice(currentIndex, currentIndex + 1)
    : glampingsList.slice(currentIndex, currentIndex + 3);

  const showNavigationButtons = !isMobileView || visibleGlampings.length >= 3;

  return (
    <div className="glamping-list">
      <h1>Glampings</h1>
      <h4>Please select a glamping.</h4>
      <div
        className="glamping-carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {visibleGlampings.map((glamping) => (
          <div className="glamping-item" key={glamping[0]}>
            <Link to={`/glamping/${glamping[0]}`}>
              {' '}
              <img
                src={glamping[3]}
                alt={glamping[1]}
                className="glamping-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300';
                }}
              />
            </Link>
            <p className="glamping-name">{glamping[1]}</p>
            <p className="glamping-type">{glamping[2]}</p>
          </div>
        ))}
      </div>
      {showNavigationButtons && (
        <div className="carousel-navigation">
          {!isMobileView && (
            <button aria-label="Previous" className="arrow arrow-left" type="button" onClick={handlePrev}>
              &#8249;
            </button>
          )}
          {!isMobileView && (
            <button aria-label="Next" className="arrow arrow-right" type="button" onClick={handleNext}>
              &#8250;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
