function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
      this.marks = [mark];
           } else {
        this.marks.push(mark);        
    }
 }

 Student.prototype.addMarks = function (...mark) {
      this.marks = [].slice.call(mark);
}

  Student.prototype.getAverage = function (getAverage) {
      const sum = this.marks.reduce((acc, number) => acc + number, 0);
      const length = this.marks.length;
      getAverage = sum / length;
      return getAverage;
  }
   
   Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;  
 }
