import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from "ag-grid-community";

@Component({
    selector: 'btn-cell-renderer',
    template: `
      <button (click)="btnClickedHandler()">Click me!</button>
    `,
  })
  export class BtnCellRenderer implements ICellRendererAngularComp {
    refresh(params: ICellRendererParams): boolean {
      throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
      throw new Error("Method not implemented.");
    }
    private params: any;

    agInit(params: any): void {
      this.params = params;
    }

    btnClickedHandler() {
      this.params.clicked(this.params.data.name);
    }
  }
