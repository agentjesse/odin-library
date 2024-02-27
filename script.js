

//library that stores book objects will be an array
const myLibrary = [];

//book objects constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//create a book, add to library
function addBookToLibrary() {
  const title = 'The Three Not So Little Bears', author = 'Jerry Smith', pages = 500, read = false;
  myLibrary.push( new Book(title, author, pages, read) )
}

//testing

addBookToLibrary();
console.log(myLibrary);