import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { ExcelExportCompleteArgs, GridAllModule, GridComponent } from '@syncfusion/ej2-angular-grids';
// import { DialogModule } from '@syncfusion/ej2-angular-popups';
// import { NumericTextBoxAllModule, RatingAllModule } from '@syncfusion/ej2-angular-inputs';
// import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
// import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
// import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
// import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
// import { OrdersService } from './order.service';
import { CheckBoxFilterBase, DataStateChangeEventArgs, getForeignData, getObject } from '@syncfusion/ej2-grids';

import { orderData } from '../data';
import { getValue, isNullOrUndefined, setValue } from '@syncfusion/ej2-base';

@Component({
  standalone: true,
  imports: [ CommonModule,  GridAllModule, ReactiveFormsModule, FormsModule,],
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public groupOptions?: Object;
  public pageSettings?: Object;
  public editSettings?: Object;
  public toolbar?: string[];
  public formatoptions?: Object;
  @ViewChild('Grid')
  public grid?: any;

  public flag: boolean = true;
  ngOnInit(): void {
    this.data = orderData.slice(0,10);
  }
}
