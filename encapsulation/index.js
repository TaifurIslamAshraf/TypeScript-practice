//public-private-protected-redonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var user2 = new User("Rakibul islam", 23);
user2.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(username, age, studentId) {
        var _this = _super.call(this, username, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Username: ".concat(this.username, ", Age: ").concat(this.age, ", studentId: ").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
var student1 = new Student("Hasan", 24, 301);
student1.setStudentId(5434);
student1.display();
console.log(student1.getStudentId());
