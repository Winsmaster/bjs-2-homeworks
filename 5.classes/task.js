class PrintEditionItem {
 constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
 }

 fix () {
    this.state = this.state*1.5;
    return this.state;
}
set state(value) {
   if (value < 0) this._state = 0;
   if (value > 100) {
      this._state = 100;
} else this._state = value;
}
get state(){
   return this._state;
}

}

class Magazine extends PrintEditionItem  {
   constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state)
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state);
      this.type = "book";
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = "novel";
   }
}

class FantasticBook  extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = "fantastic";
   }
}

class DetectiveBook   extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = "detective";
   }
}


// Задача 2


class Library {
   constructor(name, books) {
      this.name = name;
      this.books = [];
   }
   
   addBook(book) {
      if (book.state > 30) {
      this.books.push(book);
      }        
   }
   
   findBookBy(type, value) {
      for (let item of this.books) {
         if (item[type] == value) {
            return item;
         } else continue;
      } 
      return null;
     }
   
   giveBookByName(bookName) {
      let findbook = null;
         for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
               findbook = this.books[i];
               this.books.splice([i], 1); 
            } 
      }
      return findbook;     
   }
}

//задача 3.

class Student {
   constructor (name) {
      this.name = name;
      this.marks = [];
   }
   
   addMark (mark, subjectName) {
      this.marks[subjectName] = [];
      if (mark > 0 && mark < 6) {
         this.marks[subjectName].push(mark);
      } else console.log("Ошибка, оценка должна быть числом от 1 до 5");
      
      
           
   }
}
const student = new Student("jktu gtnhjd");
student.addMark(3, "algebra");
      student.addMark(8, "algebra");
      student.addMark(3, "geometry");
      student.addMark(5, "algebra");
     student.addMark(3, "math");
      student.addMark(5, "bio");

     

