import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnInit {

    title = 'To Do Application';

  constructor() { }

  ngOnInit() {
  }

}
