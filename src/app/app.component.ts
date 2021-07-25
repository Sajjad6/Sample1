import { Component, OnInit } from '@angular/core';
import { ColumnModel } from './model/cloumnModel';
const mockData = [
  {
    firstName: 'Sebastian',
    lastName: 'Eschweiler',
    age: 24,
    email: 'sebastian@gmail.com'
  },
  {
    firstName: 'Yuvraj',
    lastName: 'Singh',
    age: 36,
    email: 'yuvi@gmail.com'
  },
  {
    firstName: 'Virat',
    lastName: 'Kohli',
    age: 28,
    email: 'vk@gmail.com'
  },
  {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    age: 38,
    email: 'sachin@gmail.com'
  },
  {
    firstName: 'Steve',
    lastName: 'Palmer',
    age: 23,
    email: 'steve@gmail.com'
  },
  {
    firstName: 'Steven',
    lastName: 'Smith',
    age: 34,
    email: 'smith@gmail.com'
  },
  {
    firstName: 'Ravindra',
    lastName: 'Jadeja',
    age: 27,
    email: 'jadeja@gmail.com'
  },
  {
    firstName: 'Shubmann',
    lastName: 'Gill',
    age: 19,
    email: 'gill@gmail.com'
  },
  {
    firstName: 'Rahul',
    lastName: 'Dravid',
    age: 37,
    email: 'rahul@gmail.com'
  },
  {
    firstName: 'Rohit',
    lastName: 'Sharma',
    age: 33,
    email: 'rohit@gmail.com'
  },
  {
    firstName: 'Ann',
    lastName: 'Smith',
    age: 16,
    email: 'ann@gmail.com'
  },
  {
    firstName: 'Shikhar',
    lastName: 'Dhawan',
    age: 29,
    email: 'dhawan@gmail.com'
  },
  {
    firstName: 'Andre',
    lastName: 'Russell',
    age: 25,
    email: 'russell@gmail.com'
  },
  {
    firstName: 'Sunil',
    lastName: 'Narine',
    age: 26,
    email: 'narine@gmail.com'
  },
  {
    firstName: 'Bhuvaneshwar',
    lastName: 'Kumar',
    age: 32,
    email: 'bkumar@gmail.com'
  },
  {
    firstName: 'Zaheer',
    lastName: 'Khan',
    age: 30,
    email: 'zkhan@gmail.com'
  },
  {
    firstName: 'Harbajan',
    lastName: 'Singh',
    age: 40,
    email: 'hsingh@gmail.com'
  },
  {
    firstName: 'Ravi',
    lastName: 'Ashwin',
    age: 32,
    email: 'rashwin@gmail.com'
  }
];

const dateMock = [
  {
    firstName: 'Sebastian',
    date: '12/07/2006',
    url: 'some',
    lastName: 'Eschweiler',
    age: 24,
    email: 'sebastian@gmail.com'
  },
  {
    firstName: 'Yuvraj',
    date: '12/07/2006',
    url: 'some',
    lastName: 'Singh',
    age: 36,
    email: 'yuvi@gmail.com'
  },
  {
    firstName: 'Virat',
    date: '12/07/2006',
    url: 'some',
    lastName: 'Kohli',
    age: 28,
    email: 'vk@gmail.com'
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  rowInput: ColumnModel;
  // rows = mockData;
  columnModelData: ColumnModel;
  rowCustom;

  columnDefs: any = [
    {
      headerName: 'Checkbox',
      field: 'checkbox',
      width: 40,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { headerName: 'First Name', field: 'firstName' },
    {
      field: 'athlete',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function(field: any) {
          alert(`${field} was clicked`);
        }
      },
      minWidth: 150,
    },
    {
            headerName: 'Date',
            field: 'date',
            type: ['dateColumn', 'nonEditableColumn'],
            width: 220,
          },
    { headerName: 'URL', field: 'url' },
    { headerName: 'Age', field: 'age' },
  ];

  ngOnInit() {
    // this.paginationPageSize = 10;
    this.columnModelData = {
      itxt: 'a',
      inum: 6,
      idate: new Date('06/06/1995'),
      iurl: new URL('http://www.google.com')
    }
    console.log('Nodate:', this.columnModelData.idate);
    console.log('url:', this.columnModelData.iurl);
    const mydate = this.columnModelData.idate.toLocaleDateString();
    const myurl = this.columnModelData.iurl.toString();
    dateMock[0].date = mydate;
    dateMock[0].url = myurl;
    this.rowCustom = dateMock;
  }
}
