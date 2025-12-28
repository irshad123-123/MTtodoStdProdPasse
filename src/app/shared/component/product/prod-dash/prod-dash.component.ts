import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iprod } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss']
})
export class ProdDashComponent implements OnInit {
  prodArr : Array<Iprod> = []
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _prodService : ProductService,
              private _uuid : UuidService,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getAllProd()
  }
  getAllProd(){
    this._prodService.getAll()
      .subscribe({
        next : res =>{
          this.prodArr = res
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
  onAdd(){
    let obj = {
      ...this.formRef.value,
      id : this._uuid.Uuid()
    }
    this._prodService.addTodo(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The new Product is added successfully!!!')
          this.formRef.reset()
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
