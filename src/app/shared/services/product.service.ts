import { Injectable } from '@angular/core';
import { Iprod } from '../models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
 prodArr : Array<Iprod>  = [
  {
    id: "p1",
    title: "iPhone 14",
    content: "Apple iPhone 14 with 128GB storage, A15 Bionic chip, dual camera, and iOS support."
  },
  {
    id: "p2",
    title: "Samsung Galaxy S23",
    content: "Samsung Galaxy S23 with AMOLED display, 5G support, 256GB storage, and high-quality camera."
  },
  {
    id: "p3",
    title: "Sony Headphones",
    content: "Wireless noise-cancelling headphones with long battery life and clear sound quality."
  },
  {
    id: "p4",
    title: "Dell Laptop",
    content: "Dell laptop with Intel i5 processor, 16GB RAM, 512GB SSD, suitable for office work."
  },
  {
    id: "p5",
    title: "Nike Running Shoes",
    content: "Lightweight Nike running shoes with comfortable sole and strong grip."
  },
  {
    id: "p6",
    title: "Smart Watch",
    content: "Smart watch with heart rate monitor, step counter, and mobile notifications."
  },
  {
    id: "p7",
    title: "Bluetooth Speaker",
    content: "Portable Bluetooth speaker with deep bass and 10 hours battery backup."
  },
  {
    id: "p8",
    title: "Canon DSLR Camera",
    content: "Canon DSLR camera with 24MP sensor, HD video recording, and professional lens support."
  },
  {
    id: "p9",
    title: "Kitchen Mixer",
    content: "Electric kitchen mixer with multiple speed options and strong motor."
  },
  {
    id: "p10",
    title: "Office Chair",
    content: "Ergonomic office chair with adjustable height and comfortable back support."
  }
];
  getAll(){
    return of(this.prodArr)
  }
    addTodo(obj : Iprod){
      this.prodArr.unshift(obj)
      return of(obj)
    }
  
}
