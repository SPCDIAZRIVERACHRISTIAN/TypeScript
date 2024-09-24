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
