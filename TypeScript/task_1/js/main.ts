interface Teacher {
    firstname: string;
    lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
    printTeacher(firstname: string, lastname: string): string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return `${this.firstName}`;
    }

}

const studentConstructor: StudentConstructor = StudentClass;
const student = new studentConstructor('Jane', 'Doe');

console.log(student.displayName());

const director1: Directors = {
    firstname: 'John',
    lastname: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 5,
    printTeacher(firstname, lastname) {
        return `${firstname[0]}. ${lastname}`;
    }
};

console.log(director1.printTeacher(director1.firstname, director1.lastname));
