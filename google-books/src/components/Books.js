import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({ q: this.state.searchField })
      .then((data) => {
        //this.setState({ books: [...data.body.items]})
        const cleanData = this.cleanData(data)
        this.setState({ books: cleanData})
        //spread operator
        console.log(data.body.items);
      })
  }

    handleSearch = (e) => {
      //console.log(e.target.value);
      this.setState({ searchField: e.target.value})
    }

    handleSort = (e) => {
      //console.log(e.target.value);
      this.setState({ sort: e.target.value })
    }

    cleanData = (data) => {
      const cleanedData = data.body.items.map((book) => {
        if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
          book.volumeInfo['publishedDate'] = '0000';
        }

        else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = {thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FNo_image_3x4.svg%2F1280px-No_image_3x4.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANo_image_3x4.svg&docid=z8Gi2Rj8U5gnfM&tbnid=vZE2JJacXWBBSM%3A&vet=10ahUKEwjhiZ3zmdDlAhXEHDQIHWTRCCIQMwhPKAQwBA..i&w=1280&h=960&bih=916&biw=919&q=no%20image&ved=0ahUKEwjhiZ3zmdDlAhXEHDQIHWTRCCIQMwhPKAQwBA&iact=mrc&uact=8' };
        }
          return book;
      })

      return cleanedData;
    }


    render() {
      const sortedBooks = this.state.books.sort((a,b) => {
          if(this.state.sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
          }
          else if(this.state.sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
          }
      })
  return (
    <div>
     <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
     <BookList books={sortedBooks} />
    </div>
  );

    }
}

export default Books;
