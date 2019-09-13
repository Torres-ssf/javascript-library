const library = [];

export function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.status = this.read === 'on' ? this.read = 'off' : this.read = 'on';
}

// add to library
export function AddBookToLibrary(book) {
  library.push(book)
}

//  Database
const db = () => {
  const store = (key, value) => {
    return localStorage.setItem(key, value)
  };

  const getData = async (dbKey) => {
    let data = await localStorage.getItem(dbKey);
    return data
  };
  return {
    store,
    getData
  }
};

// display library
export function render(data) {
  const container = document.getElementById("lib-container");
  let ul = document.createElement('ul');
  ul.className = 'book-list';

  data.flat().map((book, i) => {
    let li = document.createElement('li');
    li.className = 'book-item';
    let editButton = document.createElement('button');
    editButton.setAttribute('id', 'toggle-read');
    editButton.innerText = "Read";
    editButton.onclick = (e) => editBook(e);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'toggle-delete')
    deleteButton.innerText = "Delete";
    deleteButton.onclick = (e) => deleteBook(e);

    li.setAttribute('data-book-index', i)
    li.innerHTML = `<img id="book-cover" src="/images/image.jpg"></img>
                    <h4 class="book-title">${book.title}</h4>
                    <p class="book-author">${book.author}</p>
                    <p class="book-pages">${book.pages} pages.</p>
                    <p>Read: ${book.read}</p>
                    `;

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    container.appendChild(ul);
  });
}
const getBookIndex = (index) => {
  return library.flat()[index]
};


const editBook = (e) => {
  let setStatus = e.target.previousSibling.previousSibling;
  let index = e.target.parentNode.getAttribute('data-book-index');
  let status = getBookIndex(index).read;

  if (status === 'on') {
    getBookIndex(index).read = 'off';
    e.target.innerText = 'Read'
    setStatus.innerText = "Read: No"
  }
  if (status === 'off') {
    getBookIndex(index).read = 'on';
    e.target.innerText = 'Unread'
    setStatus.innerText = 'Read: Yes'
  }

  db().store('library', JSON.stringify(library.flat()));
  //window.location.reload();

};

const deleteBook = (e) => {
  let index = e.target.parentNode.getAttribute('data-book-index');
  library[0].splice(index, 1);
  db().store('library', JSON.stringify(library.flat()));
  window.location.reload();
};


// When DOM loads
const setup = () => {
  const {
    getData,
    store
  } = db();

  getData('library').then(data => {
    if (data === null || data.length === 2) {
      let bookOne = new Book("Batman", "Sergio", 40, 'on');
      let bookTwo = new Book("Superman", "Isaac", 40, 'off');
      library.push([bookOne, bookTwo]);
      store('library', JSON.stringify(library.flat()))
      window.location.reload()
    }

    if (data !== null) {
      getData('library').then(data => {

        library.push(JSON.parse(data));
        render(library)
      })
    }
  });

};

setup();


export default library;
export {
  db
}
