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

    sortBooksAlphabetically() {
        this.books.sort((a, b) => a.title.localeCompare(b.title));
      }
  
    sortBooksReverseAlphabetically(arr) {
        this.books.sort((a, b) => b.title.localeCompare(a.title));
    }

    render() {
      const ul = document.createElement("ul");
  
      for (const book of this.books) {
        ul.append(book.render());
      }
  
      return ul;
    }
  }