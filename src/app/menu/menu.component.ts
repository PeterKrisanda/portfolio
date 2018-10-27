import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../node_modules/primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items=[
      {label: 'About', routerLink: ['about']},
      {label: 'Projects', routerLink: ['projects']},
      {label: 'Skills', routerLink: ['skills']},
      {label: 'Contact', routerLink: ['contact']},
    ];
  }

}
