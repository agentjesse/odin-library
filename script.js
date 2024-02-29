const booksGrid = document.querySelector('.booksGrid');
const newBookBtn = document.querySelector('#newBookBtn');
const newBookModal = document.querySelector('#newBookModal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const submitBookBtn= document.querySelector('#submitBookBtn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
//library that stores book objects will be an array
const myLibrary = [
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pages": 180,
    "read": false
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "pages": 281,
    "read": false
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "pages": 328,
    "read": false
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "pages": 432,
    "read": false
  }
];


//book objects constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages ? pages : 'N/A';
  this.read = read;
}

//create a book, add to library array
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push( new Book(title, author, pages, read) )
}

//build and display library on page
const updateBooksGrid = ()=> {
  booksGrid.textContent = ''; //clear books before adding
  myLibrary.forEach( (item,index)=> {
    //make html elements
    const bookElem = document.createElement('article');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const pagesPara = document.createElement('p');
    const readPara = document.createElement('p');
    //add html elements data
    h3.textContent = item.title;
    h4.textContent = item.author;
    pagesPara.textContent = `Pages: ${item.pages}`;
    readPara.textContent = `Read?: ${item.read}`;
    bookElem.classList.add('book'); //styling class
    bookElem.setAttribute('data-arr-index',`${index}`) //save index of book in library array, might need it
    //append to parents
    bookElem.append(h3, h4, pagesPara, readPara);
    booksGrid.append(bookElem);
  });
}
updateBooksGrid(); //first run to populate page

//event listeners
//open modal without bg interactivity, also makes ::backdrop pseudo-element
newBookBtn.addEventListener('click', ()=> newBookModal.showModal() );
//close and open modal from buttons within a form with method=dialog
closeModalBtn.addEventListener('click', ()=> newBookModal.close() );
submitBookBtn.addEventListener('click', ()=> {
  if ( titleInput.checkValidity() && authorInput.checkValidity() ) { //check at least title and author inputs filled
    //use data for new book with the odin required addBookToLibrary fn
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    updateBooksGrid();
    newBookModal.close(); //also sends a close event, if needed
  }
});
