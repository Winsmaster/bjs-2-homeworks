function parseCount(value) {

    let result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
        } 
        return result;
    }

    
    function validateCount(value) {
        try {
        return parseCount(value);  
        } catch(error) {
        return error;
        }
    }
    
  // задача 2 
  
  class Triangle {
    constructor(a, b, c) {
        this.a = +a;
        this.b = +b;
        this.c = +c;
       
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a )){
            throw new Error("Треугольник с такими сторонами не существует");
            } 
    }
    getPerimeter(){
        let perimetr = (this.a + this.b + this.c);
        return perimetr;
    }
    
    getArea(){
        let Per = this.getPerimeter();
        let p = Per/2;
        let area = +(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3);
        return area;
    } 
  }
 function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
        } catch(err) {
       return {
        getArea(){
            return ("Ошибка! Треугольник не существует");
        },
        getPerimeter(){
            return ("Ошибка! Треугольник не существует");
        }
       }
    }
}


  