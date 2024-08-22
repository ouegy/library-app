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

const lotr = new Book('The Lord of the Rings', 'JRR Tolkein', '565 pages', 'Yes');
const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295 pages', 'No');

myLibrary.push(lotr);

if(myLibrary) {
    displayBooks(myLibrary);
}

function getFormData() {
    const form = document.getElementById('add-new-book');
    form.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.querySelector('input[name="read"]:checked').value;

        const book = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
        addBookToLibrary(book);
        displayBooks(myLibrary.slice(-1));  
        deleteBook(myLibrary);
        return book;
    });  
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);  
    
}

function setDataAttribute(array) {
    let lastIndex = array.length - 1;
    console.log(lastIndex);
    return lastIndex;   
}

function displayBooks(array) {
    array.forEach(book => {
        const title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        

        const mainDiv = document.getElementById("main");
        const div = document.createElement('div');
        const buttons = document.createElement('div');
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');

        const createBookCard = (book) => {
            let index = setDataAttribute(myLibrary);
            div.setAttribute('class', 'card drop-shadow');
            div.setAttribute('data-attribute', index);
            buttons.setAttribute('class', 'buttons');
            button1.appendChild(document.createTextNode('Delete Book'));
            button1.setAttribute('data-attribute', index);
            button1.setAttribute('class', 'delete')
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

function toggleForm() {
    const newBook = document.getElementById('new-book');
    newBook.addEventListener('click', () => {
        const newBookForm = document.getElementById('new-book-form');
        newBookForm.classList.remove('hidden');
        newBookForm.classList.add('fade-in');
    });
}

function deleteBook(array) {
    const del = Array.from(document.getElementsByClassName('delete'));
    console.table(del);
    del.forEach(button => {
        button.addEventListener('click', () => {
            console.log('click');
            const index = button.getAttribute('data-attribute');
            console.log(index);
            array.splice(index, 1);
            console.table(myLibrary);
            const element = document.querySelector(`div[data-attribute='${index}']`);
            element.remove();
        });
    });
    
}

deleteBook(myLibrary);
getFormData();
toggleForm();

console.table(myLibrary);
