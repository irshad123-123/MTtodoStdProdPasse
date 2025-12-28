import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  isEditMode: boolean = false
  todoObj !: Itodo
  @ViewChild('formRef') formRef !: NgForm
  constructor(private _dialogRef: MatDialogRef<TodoFormComponent>,
    private _todoService: TodoService,
    private _snackBar: SnackBarService,
    private _uuid: UuidService,
    @Inject(MAT_DIALOG_DATA) obj: Itodo
  ) { this.todoObj = obj }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    console.log(this.todoObj);

    if (this.todoObj) {
      this.isEditMode = true
      setTimeout(() => {
        this.formRef.form.patchValue(this.todoObj)
      }, 0)
    }
  }

  onClose() {
    this._dialogRef.close()
  }

  onAdd() {
    if (this.formRef.valid) {
      let obj = {
        ...this.formRef.value,
        todoId: this._uuid.Uuid()
      }
      this._todoService.addTodo(obj)
        .subscribe({
          next: res => {
            this._snackBar.snackBar(`The new todoItem is added successfully!!!`)
            this._dialogRef.close()
            this.formRef.reset()
          },
          error: err => {
            console.log(err);

          }
        })
    }
  }

  onUpdate() {
    if (this.formRef.valid) {

      let Update_Obj = {
        ...this.formRef.value,
        todoId: this.todoObj.todoId
      }
      this._todoService.updateTodo(Update_Obj)
        .subscribe({
          next: res => {
            this._snackBar.snackBar('TodoItem is updated successfullY!!!')
            this.isEditMode = false
            this.formRef.reset()
            this._dialogRef.close()
          },
          error: err => {
            console.log(err);

          }
        })
    }}

  }
