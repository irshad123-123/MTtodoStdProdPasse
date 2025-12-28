import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipass } from 'src/app/shared/models/passanger';
import { PassangerService } from 'src/app/shared/services/passanger.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss']
})
export class PassDashComponent implements OnInit {
  passArr : Array<Ipass> = []
  isEditMode : boolean = false
  checkedIn ! : Array<Ipass>
  @ViewChild('inputRef') EleRef ! : ElementRef
  constructor(private _passService : PassangerService,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.getCheckedIn()
  }
  
  getAll(){
    this._passService.getAll()
      .subscribe({
        next : res =>{
          this.passArr = res
        }, 
        error : err =>{
          console.log(err);
        }
      })
  }
  getCheckedIn(){
    this.checkedIn = this.passArr.filter(f=>f.checkInDate)
    console.log(this.checkedIn);
        
  }
  getFlag(flag : boolean){
    if(flag){
      this.getCheckedIn()
    }
  }

}
