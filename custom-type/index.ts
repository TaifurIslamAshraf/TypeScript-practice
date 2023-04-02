type User = { username: string; userId: number };

let users: User[];
users = [];

let user1: User;
let user2: User;
user1 = { username: "Taifur islam", userId: 122 };
user2 = { username: "rakibul hasan", userId: 134 };

users.push(user1);
users.push(user2);

// for (const i in users) {
//   console.log(users[i]["userId"]);
// }
// console.log(users);

type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";

function requsetHandler(requestType: RequestType) {
  console.log(requestType);
}

requsetHandler("GET");
