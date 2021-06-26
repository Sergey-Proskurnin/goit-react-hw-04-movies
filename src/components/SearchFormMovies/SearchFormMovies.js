import React from 'react';

const SearchFormMovies = ({handleSubmit, value, handleChange }) => {
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
}
 
export default SearchFormMovies;