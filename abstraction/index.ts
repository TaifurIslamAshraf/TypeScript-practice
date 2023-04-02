abstract class User {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

  abstract display(): void;
}

class Student extends User {
  studentId: number;

  constructor(username: string, age: number, studentId: number) {
    super(username, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `Username: ${this.username}, Age: ${this.age}, studentId: ${this.studentId}`
    );
  }
}

let student1 = new Student("Hasan", 24, 301);
student1.display();
