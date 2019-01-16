import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Project } from '../classes/project';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  projectsMenus: MenuItem[];
  selectedItem: string;
  selectedName: string;
  selectedDescription: string;
  activeItem: MenuItem;
  activeItemIndex: number;
  @ViewChild('menuItems') menu: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {name: 'SportsApp', description: 'sports application about joining to sports competition with friends.',isActive: true},
      {name: 'Diploma thesis', description: 'Git and Unix system for studens.',isActive: false},
      {name: 'Project Helen', description: 'Game in java.',isActive: false},
      {name: 'Minesweeper', description: 'Game in javaFX.',isActive: false},
    ];

    this.projectsMenus = [
      {label: this.projects[0].name,command: (onclick) => {this.getActiveItem(this.projectsMenus[0])} },
      {label: this.projects[1].name,command: (onclick) => {this.getActiveItem(this.projectsMenus[1])} },
      {label: this.projects[2].name,command: (onclick) => {this.getActiveItem(this.projectsMenus[2])} },
      {label: this.projects[3].name,command: (onclick) => {this.getActiveItem(this.projectsMenus[3])} },
    ];

    this.activeItem = this.projectsMenus[0];
    this.activeItemIndex = this.projects.findIndex(projects => projects.name == this.activeItem.label);
    this.selectedName = this.projects[this.activeItemIndex].name;
    this.selectedDescription = this.projects[this.activeItemIndex].description;
    //this.selectedItem = this.projects[0].name;
  }

  getActiveItem(activeItem: MenuItem){
    this.activeItem = activeItem
    this.activeItemIndex = this.projects.findIndex(projects => projects.name == this.activeItem.label);
    this.selectedName = this.projects[this.activeItemIndex].name;
    this.selectedDescription = this.projects[this.activeItemIndex].description;
    console.log("haloooo")
    return this.activeItem;
  }

  activateMenu(){
   this.activeItem = this.menu['activeItem'];
  }


}
