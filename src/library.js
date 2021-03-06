const library = [];

export function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
  this.status = this.read === "on" ? (this.read = "off") : (this.read = "on");
}

// add to library
export function AddBookToLibrary(book) {
  library.push(book);
}

//  Database
const db = () => {
  const store = (key, value) => {
    return localStorage.setItem(key, value);
  };

  const getData = async dbKey => {
    let data = await localStorage.getItem(dbKey);
    return data;
  };
  return {
    store,
    getData
  };
};

// display library
export function render(data) {
  const container = document.getElementById("lib-container");
  let ul = document.createElement("ul");
  ul.className = "book-list";

  data.flat().map((book, i) => {
    let li = document.createElement("li");
    li.className = "book-item";
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "toggle-read");
    editButton.innerText = "Read";
    editButton.onclick = e => editBook(e);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "toggle-delete");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = e => deleteBook(e);

    li.setAttribute("data-book-index", i);
    li.innerHTML = `<img class="book-cover" src="${book.image}">
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
const getBookIndex = index => {
  return library.flat()[index];
};

const editBook = e => {
  let setStatus = e.target.previousSibling.previousSibling;
  let index = e.target.parentNode.getAttribute("data-book-index");
  let status = getBookIndex(index).read;

  if (status === "on") {
    getBookIndex(index).read = "off";
    e.target.innerText = "Read";
    setStatus.innerText = "Read: No";
  }
  if (status === "off") {
    getBookIndex(index).read = "on";
    e.target.innerText = "Unread";
    setStatus.innerText = "Read: Yes";
  }

  db().store("library", JSON.stringify(library.flat()));
  //window.location.reload();
};

const deleteBook = e => {
  let index = e.target.parentNode.getAttribute("data-book-index");
  library[0].splice(index, 1);
  db().store("library", JSON.stringify(library.flat()));
  window.location.reload();
};

// When DOM loads
const setup = () => {
  const {
    getData,
    store
  } = db();

  getData("library").then(data => {
    if (data === null || data.length === 2) {
      let book1 = new Book("Batman", "DC", 210, "on",
        'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
      let book2 = new Book("Superman", "DC", 80, "off",
        'data:image/jpeg;base64,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');
      let book3 = new Book("Thor", "Marvel", 60, "off",
        'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423174911');
      let book4 = new Book("Spiderman", "Marvel", 70, "off",
        'https://lwlies.com/wp-content/uploads/2017/06/spider-man-2002-1108x0-c-default.jpg');
      let book5 = new Book("Iron Man", "Marvel", 110, "off",
        'https://www.bleedingcool.com/wp-content/uploads/2018/04/avengers-infinity-war-iron-man.jpg');
      let book6 = new Book("Captain America", "DC", 95, "off",
        'https://www.sideshow.com/storage/product-images/100171/captain-america_marvel_gallery_5c4c009489925.jpg');
      library.push([book1, book2, book3, book4, book5, book6]);
      store("library", JSON.stringify(library.flat()));
      window.location.reload();
    }

    if (data !== null) {
      getData("library").then(data => {
        library.push(JSON.parse(data));
        render(library);
      });
    }
  });
};

setup();

export default library;
export {
  db
};
