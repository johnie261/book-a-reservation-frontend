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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(fetchGlampings());

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch]);

  const getVisibleGlampingsCount = () => {
    if (windowWidth <= 768) {
      return 1;
    } if (windowWidth <= 991) {
      return 2;
    }
    return 3;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1
      : glampingsList.length - getVisibleGlampingsCount()));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < glampingsList.length
       - getVisibleGlampingsCount() ? prevIndex + 1 : 0));
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

  const visibleGlampings = glampingsList.slice(currentIndex, currentIndex
     + getVisibleGlampingsCount());
  const showNavigationButtons = visibleGlampings.length < glampingsList.length
      && getVisibleGlampingsCount() !== 1;

  if (isLoading) {
    return <div className="spinner" />;
  }

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
          <button aria-label="Previous" className="arrow arrow-left" type="button" onClick={handlePrev}>
            &#8249;
          </button>
          <button aria-label="Next" className="arrow arrow-right" type="button" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
