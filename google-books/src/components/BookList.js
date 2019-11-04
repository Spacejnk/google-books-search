import React from 'react';
import BookCard from './BookCard';
import './style.css'
// render books from data api
const BookList = (props) => {
    return(
       <div className="list">
           {    // map through books
               props.books.map((book, i) => {
                    return <BookCard 
                    // book card props
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                            />
               })
           }
       </div>
    )
}

export default BookList;