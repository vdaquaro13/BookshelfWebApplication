const app = document.querySelector('#app');
const bookshelf = new Bookshelf();

// Load in book data
bookData.forEach((bookInfo) => {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
});

app.append(bookshelf.render());

// Add new book form functionality
const form = document.querySelector("#add-book-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const subjects = document.querySelector("#subjects").value.split(",");
  const language = document.querySelector("#language").value;
  const comments = [];
  const book = new Book(author, language, subjects, title);
  bookshelf.addBook(book);
  app.innerHTML = "";
  app.append(bookshelf.render());
  form.reset();
});

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', () => {
  bookshelf.sortBooksAlphabetically();
  app.innerHTML = '';
  app.append(bookshelf.render());
});

const sortReverseButton = document.querySelector('#sort-reverse-button');
sortReverseButton.addEventListener('click', () => {
  bookshelf.sortBooksReverseAlphabetically();
  app.innerHTML = '';
  app.append(bookshelf.render());
});


