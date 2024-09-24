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
