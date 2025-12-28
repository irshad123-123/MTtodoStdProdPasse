import { Component, Input, OnInit } from '@angular/core';
import { Iprod } from 'src/app/shared/models/product';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
  @Input() prodObj ! : Iprod
  onChange : string = '.....'
  constructor() { }

  ngOnInit(): void {
  }
  onProc(){
    this.onChange = 'Processing'
  }
   onDis(){
     this.onChange = 'Dispached'
  }
   onDeli(){
     this.onChange = 'Delivered'
  }

}
