var users;
users = [];
var user1;
var user2;
user1 = { username: "Taifur islam", userId: 122 };
user2 = { username: "rakibul hasan", userId: 134 };
users.push(user1);
users.push(user2);
var getRequest;
getRequest = "GET";
function requsetHandler(requestType) {
    console.log(requestType);
}
requsetHandler("GET");
