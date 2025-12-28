import { Injectable } from '@angular/core';
import { Ichild, Ipass } from '../models/passanger';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  constructor() { }
  passArr : Array<Ipass> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 }
      ]
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ]
  getAll(){
    return of(this.passArr)
  }
  removePass(obj : Ipass){
    let getIndex = this.passArr.findIndex(f=>f.id === obj.id)
    this.passArr.splice(getIndex,1)
    return of(obj)
  }
  updatePass(obj : Ipass){
    let getIndex = this.passArr.findIndex(f=>f.id === obj.id)
    this.passArr[getIndex]=obj 
    return of(obj)
  }

}
