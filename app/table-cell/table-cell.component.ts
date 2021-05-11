import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {
  @Input() text = 'Hello je suis un text super long je suis un test test';

  public enabled = false;

  public updateEditable() {
    this.enabled = true;
  }

  public changeText(newtext) {
    this.text = newtext;
    this.enabled = false;
  }
}
