import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableCellEditableComponent } from './table-cell/table-cell-editable/table-cell-editable.component';
import { ContentEditableFormDirective } from './table-cell/table-cell-editable/content-editable-form.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ContentEditableFormDirective,
    TableCellComponent,
    TableCellEditableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
