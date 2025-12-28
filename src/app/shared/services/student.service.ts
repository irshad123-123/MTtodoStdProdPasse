import { Injectable } from '@angular/core';
import { Istd } from '../models/student';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stdArr  : Array<Istd>= [
    {
      fname : 'Jhon',
      lname : 'Doe',
      email : 'jhon@gmail.com',
      contact : 8766737322,
      id : '123'
    },
    {
      fname : 'May',
      lname : 'Doe',
      email : 'may@gmail.com',
      contact : 8766737322,
      id : '124'
    },
    {
      fname : 'June',
      lname : 'Doe',
      email : 'june@gmail.com',
      contact : 8766737322,
      id : '125'
    }
  ]
  constructor() { }
  getAll(){
    return of(this.stdArr)
  }
    addTodo(obj : Istd){
      this.stdArr.push(obj)
      return of(obj)
    }
    updateTodo(obj : Istd){
      let getIndex = this.stdArr.findIndex(f=>f.id===obj.id)
      this.stdArr[getIndex] = obj
      return of(obj)
    }
    removeTodo(obj:Istd){
      let getIndex = this.stdArr.findIndex(f=>f.id===obj.id)
      this.stdArr.splice(getIndex, 1)
      return of(obj)
    }
    singleStd(id:string){
      let f = this.stdArr.find(f=>f.id === id)
      return of(f)
    }
}
