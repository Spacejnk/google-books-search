import React from 'react';
import './style.css'
// render books from data api
const BookCard = (props) => {
    return(
       <div className='card-container'>
           <img className='image' src={props.image} alt='' />
           <div className='desc'>
                <h2 className='title'>{props.title}</h2>
                <h3 className='author'>Author: {props.author}</h3>
                <p className='publish'>Published Data: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
           </div>
       </div>
    )
}

export default BookCard;