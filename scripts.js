const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return {
            title: title,
            author: author,
            pages: pages,
            read: read,
        };
    };
}

const lotr = new Book('The Lord of the Rings', 'JRR Tolkein', '565 pages', true);
const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295 pages', false);

function addBookToLibrary() {
    myLibrary.push(theHobbit);
    myLibrary.push(lotr);
}

const getBookInfo = (text) => {

}

function displayBooks(array) {
    array.forEach(book => {
        const title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        let index = array.indexOf(book);

        const mainDiv = document.getElementById("main");
        const div = document.createElement('div');
        const buttons = document.createElement('div');
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');

        const createBookCard = (book) => {
            div.setAttribute('class', 'card');
            div.setAttribute('data-attribute', index);
            buttons.setAttribute('class', 'buttons');
            button1.appendChild(document.createTextNode('Remove Book'));
            button2.appendChild(document.createTextNode('Update Read Status'));
            buttons.appendChild(button1);
            buttons.appendChild(button2);
            mainDiv.appendChild(div);
            div.appendChild(buttons);
        }

        createBookCard();

        const getBookInfo = (text) => {
            const h2 = document.createElement('h2');
            div.appendChild(h2);
            h2.appendChild(document.createTextNode(text));
        }

        const arr = [`Title: ${title}`, `Author: ${author}`, `Pages: ${pages}`, `Read: ${read}`];
        arr.forEach(element => getBookInfo(element));

    });
}


addBookToLibrary();
displayBooks(myLibrary);

console.table(myLibrary);
