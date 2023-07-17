import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';

  @Output() addTask = new EventEmitter()

  addBtn(){
    this.addTask.emit()
  }
}
