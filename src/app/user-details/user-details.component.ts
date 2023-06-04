import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import userData from '../user.json';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface User{
  name:String;
  age:Number;
  address:String;
}


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userLoggedIn:boolean = false
  users:User[] = userData
  filteredUser:User[]

  displayedColumns = ['name', 'age', 'address'];
  dataSource 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<User>(userData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  @Output() public sendData = new EventEmitter<boolean>()
  applyFilter(event) {
    let filterValue = event.target.value
    // console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
