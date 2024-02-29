const booksGrid = document.querySelector('.booksGrid');
const newBookBtn = document.querySelector('#newBookBtn');
const newBookModal = document.querySelector('#newBookModal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const submitBookBtn= document.querySelector('#submitBookBtn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#readState');
//library that stores book objects will be an array
const myLibrary = [
  {
    "title": "The Three Not So Little Bears1",
    "author": "Jerry Smith",
    "pages": 500,
    "read": false
  },
  {
    "title": "The Three Not So Little Bears2",
    "author": "Jerry Smith",
    "pages": 500,
    "read": false
  },
  {
    "title": "The Three Not So Little Bears3",
    "author": "Jerry Smith",
    "pages": 500,
    "read": false
  },
  {
    "title": "The Three Not So Little Bears4",
    "author": "Jerry Smith",
    "pages": 500,
    "read": false
  },
];

//book objects constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//create a book, add to library
function addBookToLibrary() {
  //should get user input, but using defaults for now
  const title = 'The Three Not So Little Bears5', author = 'Jerry Smith', pages = 500, read = false;
  //store the book
  myLibrary.push( new Book(title, author, pages, read) )
}

//display library on page
myLibrary.forEach( (item,index,arr)=> {
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

//event listeners
//open modal without bg interactivity, also makes ::backdrop pseudo-element
newBookBtn.addEventListener('click', ()=> newBookModal.showModal() )
//close and open modal from buttons within a form with method=dialog
closeModalBtn.addEventListener('click', ()=> newBookModal.close() );
submitBookBtn.addEventListener('click', e =>{
  //check at least title and author inputs filled, make object
  if ( titleInput.checkValidity() && authorInput.checkValidity() ) {
    const bookObj = {
      "title": titleInput.value,
      "author": authorInput.value,
      "pages": pagesInput.value,
      "read": readInput.checked,
    }
    //use data for new book, then close
    
    newBookModal.close();
  }
  
});


//test book adding to library arr
/*
addBookToLibrary();
console.log(`Library array: `, myLibrary);
*/
