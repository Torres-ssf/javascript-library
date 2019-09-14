import library, {
  Book,
  AddBookToLibrary,
  db
} from "./library";

// Display logic

//  Handle form
const form = document.getElementById("form");
// const requiredInputs = document.getElementsByClassName('required');
const formButton = document.getElementById("button-form");
const overlayContainer = document.querySelector(".overlay");
formButton.onclick = () => {
  overlayContainer.style.display = 'block';
  form.style.display = "block";
};

form.addEventListener('animationend', (event) => {
  if (event.animationName == 'form-hiding') {
    form.style.display = 'none';
    form.classList.remove('form-hide');
  } else if (event.animationName == 'nope') {
    form.classList.remove('form-error')
  }
});

overlayContainer.onclick = () => {
  overlayContainer.classList.add('overlay-fade-out');
  form.classList.add('form-hide');
}

overlayContainer.addEventListener('animationend', (event) => {
  if (event.animationName == 'fade-out') {
    overlayContainer.style.display = 'none';
    overlayContainer.classList.remove('overlay-fade-out');
  }
});

function handleForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const book = new Book(title, author, pages, read);

  AddBookToLibrary(book);

  db().store("library", JSON.stringify(library.flat()));
}

function handleFormError() {
  console.log("estoy aqui");
  form.classList.add('form-error');
}

const submitButton = document.getElementById('submit');
submitButton.onclick = () => {
  let requiredInputs = document.getElementsByClassName('required');
  Array.prototype.forEach.call(requiredInputs, input => {
    if (input.value === '') {
      form.classList.add('form-error');
    }
  })
}

const handleSubmit = document.getElementById("form");
handleSubmit.onsubmit = () => {
  handleForm();
};
