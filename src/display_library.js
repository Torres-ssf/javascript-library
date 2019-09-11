import library from './library.js'

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
