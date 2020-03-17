import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filtering = query => {
    query = query.toLowerCase();
    const filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };

  filterColor = cQuery => {
    return this.state.filteredBooks.filter(book => book.color === cQuery);
  };

  render() {
    let bookCards = this.state.filteredBooks;
    let bookColor = this.props.match.params.bookColor;
    if (bookColor) {
      bookCards = this.filterColor(bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filtering} />
        <BookTable books={bookCards} />
      </div>
    );
  }
}

export default BookList;
