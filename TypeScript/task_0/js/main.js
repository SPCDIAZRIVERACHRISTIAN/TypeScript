const student1 = {
    firstname: "Sergio",
    lastname: "Lebron",
    age: 24,
    location: "Santurce, PR",
};
const student2 = {
    firstname: "Nissel",
    lastname: "Sanchez",
    age: 32,
    location: "Santurce, PR",
};
const studentList = [student1, student2];
const table = document.createElement('table');
studentList.forEach(function (student) {
    const row = document.createElement('tr');
    const firstnameCell = document.createElement('td');
    firstnameCell.textContent = student.firstname;
    row.appendChild(firstnameCell);
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
