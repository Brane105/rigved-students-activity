import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  userid : number | undefined = undefined

  constructor(private _ar:ActivatedRoute) { }

  ngOnInit(): void {
    this._ar.params.subscribe((p:Params) => {
      this.userid = p['id']
    })
  }
}
