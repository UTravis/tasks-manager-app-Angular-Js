import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() newTaskEmitter = new EventEmitter()

  formStatus: boolean = false;

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if(!this.text){
      alert('Please enter a task');
      return;
    }

    if(!this.day){
      alert('Please enter a day');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.newTaskEmitter.emit(newTask)

    this.day = '';
    this.day = '';
    this.reminder = false;
  }
}
