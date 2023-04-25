import { Component, Output, EventEmitter } from '@angular/core';
import { newTask } from 'src/app/interfaces/task.interface';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<newTask> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private UIService: UiService) {
    this.subscription = this.UIService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  onSubmit() {
    if (this.validateText()) {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.onAddTask.emit(newTask);
      this.cleanForm();
    }
  }

  validateText() {
    return this.text ? true : false;
  }

  cleanForm() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
