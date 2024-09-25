// task_3/main.ts

/// <reference path="crud.d.ts" />

import { RowID, RowElement } from '../interface';
import * as CRUD from "./crud"

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and assign the result to newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age field set to 23
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);

// Finally, delete the row by ID
CRUD.deleteRow(newRowID);
