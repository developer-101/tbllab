import { Component, OnInit } from '@angular/core';

interface People {
  id: number;
  name: string;
  age: number;
  address: string;
}

const data: People[] = [
  { id: 1, name: 'rustam', age: 47, address: 'address line' },
  { id: 2, name: 'tagir', age: 7, address: 'smile' },
  { id: 3, name: 'amir', age: 13, address: 'back door' },
  { id: 4, name: 'jasmine', age: 10, address: 'pink road' },
  { id: 5, name: 'zarina', age: 37, address: 'smart way' }
];

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {

  constructor() { }

  peope: People[] = data;
  displayedColumns = ['id', 'name', 'age', 'address'];
  displayedColumnNames = ['#', 'Name', 'Age', 'Address'];

  ngOnInit(): void {
  }

}
