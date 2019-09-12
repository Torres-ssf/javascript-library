console.log('library is working now');

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

    const getData = async(dbKey) => {
        let data = await localStorage.getItem(dbKey);
        return data
    };
    return { store, getData }
};

// display library
export function render(data) {
    const container = document.getElementById("lib-container");
    let ul = document.createElement('ul');
    console.log(data);

    data.flat().map((book, i) => {
        let li = document.createElement('li');

        let editButton = document.createElement('button');
        editButton.setAttribute('id', 'toggle-read');
        editButton.innerText = "Read";
        editButton.onclick = (e) => editBook(e);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.onclick = (e) => deleteBook(e);

        li.setAttribute('data-book-index', i)
        li.innerHTML = `<p>Title: ${book.title}</p>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Finished: ${book.read}</p>
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
        setStatus.innerText = "Din't read this book"
    }
    if (status === 'off') {
        getBookIndex(index).read = 'on';
        setStatus.innerText = 'Read this book'
    }

    db().store('library', JSON.stringify(library.flat()));
    //window.location.reload();

};

const deleteBook = (e) => {
    console.log(library);
    let index = e.target.parentNode.getAttribute('data-book-index');
    console.log(library[0].splice(index, 1));
    db().store('library', JSON.stringify(library.flat()));
    console.log(library);
    window.location.reload();
};


// When DOM loads
const setup = () => {
    const { getData, store } = db();

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
export { db }