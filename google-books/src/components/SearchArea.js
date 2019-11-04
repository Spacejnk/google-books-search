import React from 'react';
import './style.css'

const SearchArea = (props) => {
    return(
      <div className='search-area'>
          <form onSubmit={props.searchBook} action=''>
              <input onChange={props.handleSearch} type='text'/>
              <button type='submit'>Search</button>
              <select defaultValue='Sort' onchange={}>
                  <option disabled value='Sort'></option>
                  <option></option>
                  <option></option>
              </select>
          </form>
      </div>
    )
}

export default SearchArea;