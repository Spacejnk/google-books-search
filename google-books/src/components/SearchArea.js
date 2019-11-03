import React from 'react';
import './style.css'

const SearchArea = () => {
    return(
      <div className='search-area'>
          <form action=''>
              <input type='text'/>
              <button type='submit'>Search</button>
          </form>
      </div>
    )
}

export default SearchArea;