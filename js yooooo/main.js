class User {

    constructor(name, age) {
    this.name = "Yelan";
    this.age = 26;
    }
    
    print() {
    console.log("Yelan " + this.name + " 26 " + this.age);
     }   
    }



    var user = new User("Yelan", 26 );
user.print();

class Student extends User {

    constructor(name, age, username, password) {   
        super(name, age);
        this.username = 'Yelan';
        this.password = 2671;
      }
    
    print() {
        console.log( this.password ? "Вы успешно прошли" : "Пока!Неудачник" );
    }

}
var student = new Student("Yelan", 26, "Yelan", 2671); 
student.print(3467);

