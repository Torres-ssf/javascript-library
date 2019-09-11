console.log('library is working now');

let library = [];

// console.log(library);
function Book(title, author,pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//  Database
const db = () => {
    const  store = (key,value) => {
        return localStorage.setItem(key,value)
    };

    const getData = async (dbKey) =>{
        let data = await localStorage.getItem(dbKey);
        return data
    };
    return {store, getData}
};

let bookOne = new Book("Batman", "Sergio", 40, false);
let bookTwo= new Book("Superman", "Isaac", 40, false);

library.push([bookOne,bookTwo]);
// Add data to database

db().store("library",JSON.stringify(library.flat()));








