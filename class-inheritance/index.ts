class User {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

  display(): void {
    console.log(`userName: ${this.username}, age: ${this.age}`);
  }
}

let user1 = new User("Taifur islam", 21);
user1.display();

class Student extends User {
  studentId: number;

  constructor(username: string, age: number, studentId: number) {
    super(username, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `userName: ${this.username}, age: ${this.age}, studentId: ${this.studentId}`
    );
  }
}

let student1 = new Student("Hasan", 23, 101);
student1.display();
