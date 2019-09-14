import library, {
  Book,
  AddBookToLibrary,
  db
} from "./library";

// Display logic

//  Handle form
const form = document.getElementById("form");
const formButton = document.getElementById("button-form");
const overlayContainer = document.querySelector(".overlay");
formButton.onclick = () => {
  overlayContainer.style.display = 'block';
  form.style.display = "block";
};

overlayContainer.onclick = () => {
  overlayContainer.style.display = 'none';
  form.style.display = 'none';
}

function handleForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const book = new Book(title, author, pages, read);

  AddBookToLibrary(book);

  db().store("library", JSON.stringify(library.flat()));
}

const handleSubmit = document.getElementById("form");
handleSubmit.onsubmit = () => {
  handleForm();
};
