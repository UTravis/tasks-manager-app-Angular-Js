import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskFormService {
  status: boolean = false;

  constructor() { }

  changeFormStatus(): void {
    this.status = !this.status
  }

  getFormStatus(): boolean {
    return this.status
  }
}
