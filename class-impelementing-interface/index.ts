interface IUserFormatter {
  formateUser: () => string;
}

class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}
  formateUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

const user = new User("Taifur islam", 22);

console.log(user.formateUser());
