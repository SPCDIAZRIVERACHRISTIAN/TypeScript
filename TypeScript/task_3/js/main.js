"use strict";
// task_3/main.ts
exports.__esModule = true;
var CRUD = require("./crud");
// Create an object of type RowElement
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Insert the row and assign the result to newRowID
var newRowID = CRUD.insertRow(row);
// Update the row with age field set to 23
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
// Finally, delete the row by ID
CRUD.deleteRow(newRowID);
