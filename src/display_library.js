import library, {Book, AddBookToLibrary, db, render} from './library.js'

// Display logic

//  Handle form
const form = document.getElementById('form');
let formButton = document.getElementById('button-form');
formButton.onclick  =  () => {
  console.log("form working");
    form.style.display = 'block'

};

// Get all inputs fields from the form
// Add all the to Book object
/// Add to library Array
// Save the library to database
// and the we are cool!

function handleForm() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value;
  let book = new Book(title, author, pages, read);

  AddBookToLibrary(book);
  console.log(library.flat());
  db().store('library', JSON.stringify(library.flat()));
}

let handleSubmit = document.getElementById('form');
handleSubmit.onsubmit = (e) => {

  console.log("Testing submit button");
  handleForm();
};
