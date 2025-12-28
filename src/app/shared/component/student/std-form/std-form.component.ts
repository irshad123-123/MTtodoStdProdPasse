import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Istd } from 'src/app/shared/models/student';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  isEditMode : boolean = false
  stdObj ! : Istd
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _dialogRef : MatDialogRef<StdFormComponent>,
              private _uuid : UuidService,
              private _stdService : StudentService,
              private _snackBar : SnackBarService,
              @Inject(MAT_DIALOG_DATA) obj : Istd
  ) { this.stdObj = obj}

  ngOnInit(): void {
    this.patchData()
  }
  patchData(){
    if(this.stdObj){
      this.isEditMode = true
      setTimeout(()=>{
        this.formRef.form.patchValue(this.stdObj)
      },0)
    }
  }

  onClose(){
    this._dialogRef.close()
  }
  onAdd(){
    if(this.formRef.valid){
      let obj ={
      ...this.formRef.value,
      id : this._uuid.Uuid()
    }
    this._stdService.addTodo(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The new Student is added successfully!!!')
          this._dialogRef.close()
          this.formRef.reset()
        },
        error : err =>{
          console.log(err);
        }
      })
    }
  }
  onUpdate(){
if(this.formRef.valid){
      let Updated_Obj = {
      ...this.formRef.value,
      id : this.stdObj.id
    }
    this._stdService.updateTodo(Updated_Obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The student detail is Updated successfully!!!')
          this._dialogRef.close()
          this.formRef.reset()
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
}
}
