import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomGridComponent } from './shared/custom-grid/custom-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRenderer } from './shared/custom-grid/button/button-cell-renderer.component';
import { ImgCellRenderer } from './shared/custom-grid/image/image-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomGridComponent,
    BtnCellRenderer,
    ImgCellRenderer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([BtnCellRenderer, ImgCellRenderer])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
