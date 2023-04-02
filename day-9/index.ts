let users: object[];
users = [];

let user1: { username: string; userId: number };
let user2: { username: string; userId: number };
user1 = { username: "Taifur islam", userId: 101 };
user2 = { username: "Rakibul islma", userId: 102 };

users.push(user1);
users.push(user2);

for (const i in users) {
  console.log(users[i]["username"]);
}
