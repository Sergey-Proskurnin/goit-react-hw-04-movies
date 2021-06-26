import React from 'react';
import PropTypes from 'prop-types';

const SearchFormMovies = ({ handleSubmit, value, handleChange }) => {
  return (
    <form className={'form'} onSubmit={handleSubmit}>
      <label htmlFor={''} className="lable">
        <input
          className={'input'}
          type="text"
          value={value}
          onChange={handleChange}
          id={''}
        />
      </label>

      <button className={'button'} type="submit">
        Search
      </button>
    </form>
  );
};

SearchFormMovies.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default SearchFormMovies;
