import { Component, OnInit } from '@angular/core';

interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
}

const data: Person[] = [
  { id: 1, name: 'rustam', age: 47, address: 'address 1' },
  { id: 2, name: 'tagir', age: 9, address: 'address green' },
  { id: 3, name: 'amir', age: 13, address: 'address slim' },
  { id: 4, name: 'jasmine', age: 10, address: 'address pink' },
  { id: 5, name: 'zarina', age: 37, address: 'address young' }
]

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  constructor() { }

  people: Person[] = data;
  displayedColumnNames: string[] = ['#', 'Name', 'Age', 'Address'];
  displayedColumns: string[] = ['id', 'name', 'age', 'address'];

  ngOnInit(): void {
  }

}
