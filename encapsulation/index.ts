//public-private-protected-redonly

class User {
  public username: string;
  protected age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.username}, age: ${this.age}`);
  }
}

let user1 = new User("Taifur islam", 22);
user1.display();
let user2 = new User("Rakibul islam", 23);
user2.display();

class Student extends User {
  private studentId: number;

  constructor(username: string, age: number, studentId: number) {
    super(username, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `Username: ${this.username}, Age: ${this.age}, studentId: ${this.studentId}`
    );
  }

  setStudentId(studentId: number) {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Hasan", 24, 301);
student1.setStudentId(5434);
student1.display();
console.log(student1.getStudentId());
