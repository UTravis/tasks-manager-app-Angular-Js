import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  btnColor: string = 'green';
  btnText: string = 'Add +';
  title: string = 'Task Manager'
  addTaskStatus: boolean = false;

  constructor(private route: Router) {}

  addTask() {
    this.addTaskStatus = !this.addTaskStatus

    if(this.addTaskStatus){
      this.btnColor = 'green'
      this.btnText = 'Add +'
    }else{
      this.btnColor = 'red'
      this.btnText = 'Close x'
    }

  }


  hasRoute(route: string): boolean {
    return (this.route.url === route)
  }
}
