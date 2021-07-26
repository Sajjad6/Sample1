import { Component, OnInit } from '@angular/core';
import { mockData } from './mockdata/mockData';
import { ColumnModel } from './model/cloumnModel';
import { BtnCellRenderer } from './shared/custom-grid/button/button-cell-renderer.component';
import { ImgCellRenderer } from './shared/custom-grid/image/image-cell-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  rowInput: ColumnModel;
  columnModelData: ColumnModel[];
  rowCustom;
  rowData = [{
    name: 'Sajjad Akram',
    age: '10',
    dob: '06/06/1995',
    url: 'http://www.google.com'
  }];

  frameworkComponents;
  rowsPerPage;

  columnDefs: any = [
    {
      headerName: 'Checkbox',
      field: 'checkbox',
      width: 40,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { headerName: 'Name', field: 'name', width: 180 },
    {
      field: 'View Row Data',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function (field: any) {
          alert(`You have Clicked ${field} row`);
        }
      },
      width: 126,
    },
    {
      field: 'Emoji',
      cellRenderer: 'imgCellRenderer',
      width: 80,
    },
    {
      headerName: 'Date Of Birth',
      field: 'date',
      type: ['dateColumn', 'nonEditableColumn'],
      width: 120,
    },
    { headerName: 'URL', field: 'url', width: 160 },
    { headerName: 'Age', field: 'age', width: 88 },
  ];

  ngOnInit() {
    this.columnModelData = mockData
    mockData.forEach(row => {
      let arr: any = {};
      arr.name = row.name;
      arr.age = row.age.toString();
      arr.dob = row.dob.toLocaleDateString();
      arr.url = row.url.toString();
      this.rowData.push(arr);
    })
    this.rowCustom = this.rowData;
    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer,
      imgCellRenderer: ImgCellRenderer
    }
    this.rowsPerPage = 10;
  }
}
