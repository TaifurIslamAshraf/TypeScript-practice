var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.username, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Taifur islam", 22);
user1.display();
var user2 = new User("rakib islam", 23);
user2.display();
