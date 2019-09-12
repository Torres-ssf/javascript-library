console.log('library is working now');

const library = [];

// console.log(library);
export function Book(title, author,pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// add to library
export function AddBookToLibrary(book) {
  library.push(book)
}

//  Database
const db = () => {
    const  store = (key,value) => {
        return localStorage.setItem(key,value)
    };

    const getData = async (dbKey) => {
        let data = await localStorage.getItem(dbKey);
        return data
    };
    return {store, getData}
};

// display library
export function render(data) {
    const container = document.getElementById("lib-container");
    console.log(data);
    data.flat().map((book, i) => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = `<p>Title: ${book.title}</p>
                        <p>Author: ${book.author}</p>
                        <p>Pages: ${book.pages}</p>
                        <p>Finished: ${book.read}</p>
                        <button id='toggle-read'>Read</button>`;
        ul.appendChild(li);
        container.appendChild(ul);
    });
}


// When DOM loads
const setup = () => {
    const {getData, store} = db();

   getData('library').then( data => {

       if(data === null) {
           let bookOne = new Book("Batman", "Sergio", 40, false);
           let bookTwo = new Book("Superman", "Isaac", 40, false);
           library.push([bookOne, bookTwo]);
           store('library',JSON.stringify(library.flat()))
            window.location.reload()
       }

       if(data !== null){
           getData('library').then(data => {

              library.push(JSON.parse(data));
               render(library)
           })
       }
   });

};

setup();




// Add data to database


export default library;
export {db}
