//--------------- Bookshelf Class ----------------

class Bookshelf {
    constructor(books = []) {
      this.books = books;
    }
  
    addBook(book) {
      this.books.unshift(book);
    }

    addComment(bookTitle, comment) {
        const book = this.books.find(b => b.title === bookTitle);
        if (book) {
          book.comments.push(comment);
        }
      }
  
    render() {
      const ul = document.createElement("ul");
  
      for (const book of this.books) {
        ul.append(book.render());
      }
  
      return ul;
    }
  }