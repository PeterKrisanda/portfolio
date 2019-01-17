import { Component, OnInit, HostListener } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Project } from '../classes/project';

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

  allImages: any[];
  images: any[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {name: 'SportsApp', description: 'sports application about joining to sports competition with friends. In common is used to join ice hockey match. Hockey is sport which are played in ice hockey stadion. And stadions are very bussy in Presov, because in Presov is only one ice hockey stadion.',isActive: true},
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

    this.allImages = [
      {source:'assets/img/pr_img/galleria1.jpg', alt:'Description for Image 1', title:'Title 1',nameProject: this.projects[0].name},
      {source:'assets/img/pr_img/galleria2.jpg', alt:'Description for Image 2', title:'Title 2',nameProject: this.projects[0].name},
      {source:'assets/img/pr_img/galleria3.jpg', alt:'Description for Image 3', title:'Title 3',nameProject: this.projects[1].name},
      {source:'assets/img/pr_img/galleria4.jpg', alt:'Description for Image 4', title:'Title 4',nameProject: this.projects[2].name},
      {source:'assets/img/pr_img/galleria4.jpg', alt:'Description for Image 4', title:'Title 4',nameProject: this.projects[2].name},
      {source:'assets/img/pr_img/galleria4.jpg', alt:'Description for Image 4', title:'Title 4',nameProject: this.projects[3].name},
    ];

    this.activeItem = this.projectsMenus[0];
    this.activeItemIndex = this.projects.findIndex(projects => projects.name == this.activeItem.label);
    this.selectedName = this.projects[this.activeItemIndex].name;
    this.selectedDescription = this.projects[this.activeItemIndex].description;

    this.makeNewImagesArray();
    this.height = 300;
    this.width = 400;

    //this.selectedItem = this.projects[0].name;
  }

  height: number;
  width: number;


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }

  getActiveItem(activeItem: MenuItem){
    this.activeItem = activeItem
    this.activeItemIndex = this.projects.findIndex(projects => projects.name == this.activeItem.label);
    this.selectedName = this.projects[this.activeItemIndex].name;
    this.selectedDescription = this.projects[this.activeItemIndex].description;
    this.makeNewImagesArray();
    console.log("haloooo")
    return this.activeItem;
  }

  makeNewImagesArray(){
    this.images = [{source:'init', alt:'init', title:'init', nameProject:'init'}];

    for(let image of this.allImages){

      if(image.nameProject == this.activeItem.label){
        console.log(image.nameProject);
        this.images.push(image);
        console.log(this.images);
      }
    }

    this.images.splice(0, 1);
  }


}
