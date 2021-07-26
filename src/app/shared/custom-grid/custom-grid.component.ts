import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input('rowInput') rowinput: any;
  @Input('colInput') colinput: any;
  @Input('frameworkComp') frameworkcomp: any;
  @Input('pageSize') pagesize: any;

  rowData;
  colData;
  rowSelection: any;
  defaultColDef: any;
  paginationPageSize: any;
  frameworkComponents: any;

  constructor() { }

  ngOnInit(): void {
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true
    };
    this.paginationPageSize = this.pagesize
    this.rowData = this.rowinput;
    this.colData = this.colinput;
    this.frameworkComponents = this.frameworkcomp;
  }
}
