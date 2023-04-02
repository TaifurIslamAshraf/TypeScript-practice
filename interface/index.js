var users = [];
var user1 = {
    id: 1,
    name: "Taifur islam",
    age: 22,
};
var user2 = {
    id: 2,
    name: "Rakibul islam",
    age: 23,
};
users.push(user1);
users.push(user2);
// console.log(users);
var printUserInfo = function (user) {
    console.log("id=".concat(user.id, ", name=").concat(user.name, ", age=").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
