import library, { Book, AddBookToLibrary, db } from './library.js';

// Display logic

//  Handle form
const form = document.getElementById('form');
const formButton = document.getElementById('button-form');
formButton.onclick = () => {
    console.log("form working");
    form.style.display = 'block'

};

function handleForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    const book = new Book(title, author, pages, read);

    AddBookToLibrary(book);
    console.log(library.flat());
    db().store('library', JSON.stringify(library.flat()));
}

const handleSubmit = document.getElementById('form');
handleSubmit.onsubmit = () => {

    console.log("Testing submit button");
    handleForm();
};