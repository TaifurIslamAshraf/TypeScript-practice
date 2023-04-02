var users;
users = [];
var user1;
var user2;
user1 = { username: "Taifur islam", userId: 101 };
user2 = { username: "Rakibul islma", userId: 102 };
users.push(user1);
users.push(user2);
for (var i in users) {
    console.log(users[i]["username"]);
}
