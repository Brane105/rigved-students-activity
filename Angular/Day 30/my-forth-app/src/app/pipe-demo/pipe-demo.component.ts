import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  username: string = "Lucifer";
  birthday: Date = new Date(1990, 11, 29);
  amount: number = 89999;
  
  constructor() { }

  ngOnInit(): void {
  }

}
