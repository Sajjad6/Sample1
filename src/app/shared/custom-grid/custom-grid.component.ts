import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColumnModel } from 'src/app/model/cloumnModel';
import { BtnCellRenderer } from './button/button-cell-renderer.component';

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
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input('rowInput') rowinput: any;
  @Input('colInput') colinput: any;

  // columnDefs: any = [
  //   {
  //     headerName: 'Checkbox',
  //     field: 'checkbox',
  //     width: 40,
  //     headerCheckboxSelection: true,
  //     headerCheckboxSelectionFilteredOnly: true,
  //     checkboxSelection: true,
  //   },
  //   { headerName: 'First Name', field: 'firstName' },
  //   {
  //           headerName: 'Date',
  //           field: 'date',
  //           type: ['dateColumn', 'nonEditableColumn'],
  //           width: 220,
  //         },
  //   { headerName: 'URL', field: 'url' },
  //   { headerName: 'Last Name', field: 'lastName' },
  //   { headerName: 'Age', field: 'age' },
  //   { headerName: 'Email', field: 'email' },
  // ];

  rowData;
  colData;
  userInput: any;
  rowSelection: any;
  defaultColDef: any;
  paginationPageSize: any;

  finalColumn: any;
  columnModelData: ColumnModel;

  frameworkComponents: any;

  constructor() { }

  ngOnInit(): void {
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true
    };
    this.paginationPageSize = 10;
    this.rowData = this.rowinput;
    this.colData = this.colinput;
    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer
    }
  }
}
