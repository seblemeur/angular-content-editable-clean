import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-table-cell-editable',
  templateUrl: './table-cell-editable.component.html',
  styleUrls: ['./table-cell-editable.component.css']
})
export class TableCellEditableComponent implements OnInit {
  @Input() text = 'Test content';
  @Output() updateText = new EventEmitter<any>();
  @ViewChild('editableContentDiv') editSchemaModal;

  public enabled = true;

  ngOnInit(): void {
    this.editSchemaModal.nativeElement.focus();
  }

  public updateEnabled() {
    this.enabled = true;
  }

  public textUpdated(newValue) {
    console.log('change');
    console.log(newValue);
  }

  @HostListener('focusout', ['$event'])
  onFocusout(event) {
    this.enabled = false;
    this.updateText.emit(this.text);
  }
}
