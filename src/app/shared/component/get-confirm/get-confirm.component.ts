import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
  msg ! : string
  constructor(private _dialogRef : MatDialogRef<GetConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) getMsg : string
  ) { this.msg= getMsg}

  ngOnInit(): void {
  }
  onClose(flag : boolean){
    this._dialogRef.close(flag)
  }

}
