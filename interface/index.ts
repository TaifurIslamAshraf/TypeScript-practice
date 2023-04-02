interface IUser {
  id: number | string;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "Taifur islam",
  age: 22,
};

let user2: IUser = {
  id: 2,
  name: "Rakibul islam",
  age: 23,
};

users.push(user1);
users.push(user2);
// console.log(users);

const printUserInfo = (user: IUser) => {
  console.log(`id=${user.id}, name=${user.name}, age=${user.age}`);
};

users.forEach((user) => printUserInfo(user));
