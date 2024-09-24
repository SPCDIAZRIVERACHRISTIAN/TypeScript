var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return "".concat(this.firstName);
    };
    return StudentClass;
}());
var studentConstructor = StudentClass;
var student = new studentConstructor('Jane', 'Doe');
console.log(student.displayName());
var director1 = {
    firstname: 'John',
    lastname: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 5,
    printTeacher: function (firstname, lastname) {
        return "".concat(firstname[0], ". ").concat(lastname);
    }
};
console.log(director1.printTeacher(director1.firstname, director1.lastname));
