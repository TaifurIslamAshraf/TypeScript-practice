class User {
  username: string;
  age: number;

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
let user2 = new User("rakib islam", 23);
user2.display();
