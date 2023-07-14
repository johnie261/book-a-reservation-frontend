import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGlampings } from '../store/actions/glampingActions';

const GlampingList = ({
  glampings,
  loading,
  error,
  fetchGlampings,
}) => {
  useEffect(() => {
    fetchGlampings();
  }, [fetchGlampings]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Glamping List</h2>
      <ul>
        {glampings.map((glamping) => (
          <li key={glamping.id}>{glamping.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  glampings: state.glamping.glampings,
  loading: state.glamping.loading,
  error: state.glamping.error,
});

const mapDispatchToProps = {
  fetchGlampings,
};

GlampingList.propTypes = {
  glampings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      glampingType: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchGlampings: PropTypes.func.isRequired,
};

GlampingList.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlampingList);
