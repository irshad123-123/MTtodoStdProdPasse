import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArr : Array<Itodo> = []
  constructor(private _todoService : TodoService,
              private _dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this._todoService.getAllTodo()
      .subscribe({
        next : res =>{
          this.todoArr = res
        },
        error : err=>{
          console.log(err);
        }
      })
  }
  onOpen(){
    const dialogConfi = new MatDialogConfig()
    dialogConfi.disableClose = true;
    dialogConfi.width = '400px'
    dialogConfi.minWidth = '90'
    this._dialog.open(TodoFormComponent, dialogConfi)
  }

}
