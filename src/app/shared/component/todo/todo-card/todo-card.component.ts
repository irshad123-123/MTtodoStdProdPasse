import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/shared/models/todo';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { TodoService } from 'src/app/shared/services/todo.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { LowerCasePipe } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todoObj ! : Itodo
  constructor(private _dialog : MatDialog,
              private _todoService : TodoService,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  onRemove(){
    const dialogconfi = new MatDialogConfig()
    dialogconfi.data = `Are you sure, you want to remove todoItem with id ${this.todoObj.todoId}`
    dialogconfi.disableClose = true;
   let dialogRef =  this._dialog.open(GetConfirmComponent, dialogconfi)
    dialogRef.afterClosed()
      .subscribe({
        next : res =>{
          console.log(res);
          
          if(res){
            this._todoService.removeTodo(this.todoObj)
              .subscribe({
                next : res =>{
                  this._snackBar.snackBar('TodoItem is removed successfully!!!')
                },
                error : err =>{
                  console.log(err); 
                }
              })
          }
        },
        error : err =>{
          console.log(err);
        }
      })
  }

  onEdit(){
    let dialogconfi = new MatDialogConfig()
    dialogconfi.width = '400px'
    dialogconfi.disableClose = true
    dialogconfi.data = this.todoObj
    this._dialog.open(TodoFormComponent, dialogconfi)
  }


}
