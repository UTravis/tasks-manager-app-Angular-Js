import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskType } from 'src/app/TaskType';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() delEventEmitter = new EventEmitter()
  @Output() dblBtnEventEmitter = new EventEmitter()

  faTrash = faTrash;

  delBtn(task: TaskType){
    this.delEventEmitter.emit(task)
  }

  dblBtn(){
    this.dblBtnEventEmitter.emit()
  }
}
