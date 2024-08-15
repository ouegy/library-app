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

let bookObject = Object.getPrototypeOf(Book);
console.log(bookObject);



const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295 pages', 'read');

console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit));
document.write(theHobbit.title, theHobbit.author, theHobbit.pages, theHobbit.read);

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
Object.setPrototypeOf(rabbit, animal); // sets rabbit.[[Prototype]] = animal
  
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };
  
  Object.setPrototypeOf(table, head);
  Object.setPrototypeOf(bed, table);
  Object.setPrototypeOf(pockets, bed);

  console.log(pockets.pen);

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
//   player1.sayName(); // logs 'steve'
//   player2.sayName(); // logs 'also steve'

//   console.log(Object.getPrototypeOf(player1));


  