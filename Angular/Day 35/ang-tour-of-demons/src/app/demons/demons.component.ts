import { Component, OnInit } from '@angular/core';
import { demon } from '../demon';
import { demons } from '../mock-demons';
@Component({
  selector: 'app-demons',
  templateUrl: './demons.component.html',
  styleUrls: ['./demons.component.css']
})
export class DemonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Demon : demon ={
    id : 666,
    name : 'Lucifer'
  };
  Demons = demons;
  //this is select from the demonlist
  selecteddemon? : demon ;
  onSelect(DEMON: demon ):void{
    this.selecteddemon = DEMON;
  }
  D = demons;
  //this is select from the demonlist
  selectedD? : demon ;
  onSelect1(D: demon ):void{
    this.selecteddemon = D;
  }
  
}
