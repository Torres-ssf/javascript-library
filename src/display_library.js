import library, {Book, AddBookToLibrary, db} from './library.js'

// Display logic
function render() {
  const container = document.getElementById("lib-container");
  library.flat().map((book, i) => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = `<p>Title: ${book.title}</p> <p>Author: ${book.author}</p> <p>Pages: ${book.pages}</p> <p>Finished: ${book.read}</p>`;
    ul.appendChild(li);
    container.appendChild(ul);
  });
}

render();


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
  e.preventDefault();
  console.log("Testing submit button");
  handleForm();
}
