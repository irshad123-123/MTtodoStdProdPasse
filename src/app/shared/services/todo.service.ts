import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todoArr : Array<Itodo> =[
    {
      todoItem : 'HTML',
      todoId : '123'
    },
    {
      todoItem : 'CSS',
      todoId : '124'
    },
    {
      todoItem : 'Javascript',
      todoId : '125'
    },
    {
      todoItem : 'Angular',
      todoId : '126'
    }
  ]
  getAllTodo(){
    return of(this.todoArr)
  }
  addTodo(obj : Itodo){
    this.todoArr.unshift(obj)
    return of(obj)
  }
  updateTodo(obj : Itodo){
    let getIndex = this.todoArr.findIndex(f=>f.todoId===obj.todoId)
    this.todoArr[getIndex] = obj
    return of(obj)
  }
  removeTodo(obj:Itodo){
    let getIndex = this.todoArr.findIndex(f=>f.todoId===obj.todoId)
    this.todoArr.splice(getIndex, 1)
    return of(obj)
  }
}
