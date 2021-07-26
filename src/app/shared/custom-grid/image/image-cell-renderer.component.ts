import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from "ag-grid-community";

@Component({
    selector: 'img-cell-renderer',
    template: `
      <img src="../../../assets/emoji.png"
      alt="loading..."
      style="height: 24px;">
    `,
  })
  export class ImgCellRenderer implements ICellRendererAngularComp {
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

  }
