import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipass } from 'src/app/shared/models/passanger';
import { PassangerService } from 'src/app/shared/services/passanger.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj ! : Ipass
  @Output()emitData : EventEmitter<boolean> = new EventEmitter()
  isEditMode : boolean = false
    @ViewChild('inputRef') EleRef ! : ElementRef
  constructor(private _passService : PassangerService,
                private _snackBar : SnackBarService) { }

  ngOnInit(): void {
  }

  onRemove(){
    this._passService.removePass(this.passObj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The passange is removed successfully!!!')
          this.emitData.emit(true)
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
  onUpdate(){
    let obj = {
      ...this.passObj,
      fullname : this.EleRef.nativeElement.value
    }
    console.log(obj);
    
    this._passService.updatePass(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The passanger is update successfully!!!')
          this.isEditMode = false
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
