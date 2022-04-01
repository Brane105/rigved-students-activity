import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demons',
  templateUrl: './demons.component.html',
  styleUrls: ['./demons.component.css']
})
export class DemonsComponent implements OnInit {
  demon1 : string = "Lucifer"
  demon2 : string = "Bilial"
  demon3 : string = "Asmodeous"
  demon4 : string = "Belphegor"
  constructor() { }

  ngOnInit(): void {
  }

}
