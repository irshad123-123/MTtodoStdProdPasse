import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istd } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { StdFormComponent } from '../std-form/std-form.component';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-std-dash',
  templateUrl: './std-dash.component.html',
  styleUrls: ['./std-dash.component.scss']
})
export class StdDashComponent implements OnInit {
  stdArr : Array<Istd> = []
  constructor(private _stdService : StudentService,
              private _dialog : MatDialog,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
      this._stdService.getAll()
        .subscribe({
          next : res =>{
            this.stdArr = res
          },
          error : err =>{
            console.log(err);    
          }
        })
  }
  onOpen(){
    const dialogConfi = new MatDialogConfig()
    dialogConfi.disableClose = true
    dialogConfi.width = '500px'
    dialogConfi.maxWidth = '90%'
    this._dialog.open(StdFormComponent,dialogConfi)
  }
  obj! : Istd
  onRemove(std : Istd){
    const dialogconfi = new MatDialogConfig()
    dialogconfi.data = 'Are you sure want to remove this student ?'
    dialogconfi.disableClose = true

   let dialogRes = this._dialog.open(GetConfirmComponent, dialogconfi)
   dialogRes.afterClosed()
    .subscribe({
      next : res =>{
        if(res){
          this._stdService.removeTodo(std)
          this._snackBar.snackBar('Student detail is removed successfully!!!')
        }
      },
      error : err=>{
        console.log(err); 
      }
    })
 }
 onEdit(std : Istd){
  let dialogConfi = new MatDialogConfig()
  dialogConfi.disableClose = true;
  dialogConfi.data = std;
  dialogConfi.width = '500px'
  dialogConfi.maxWidth = '90%'
  this._dialog.open(StdFormComponent, dialogConfi)
 }

}
