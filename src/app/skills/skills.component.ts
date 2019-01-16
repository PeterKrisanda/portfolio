import { Component, OnInit } from '@angular/core';
import { Skill } from '../classes/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[];

  constructor() {

  }

  ngOnInit(){

    this.skills = [
      {name: 'Angular',file:'angular_icon.png',description: 'I work with Angular on SportsApp and this Portfolio site.', level: 'Pre-intermediate'},
      {name: 'Javascript',file:'javascript_icon.png',description: 'Javascript I use for some operation in HPOO technologie and some other web projects', level: 'Pre-intermediate'},
      {name: 'Python',file:'python_icon.png',description: 'My diploma thesis was programed with Python language.', level: 'Elementary/Pre-intermediate'},
      {name: 'HPOO',file:'',description: 'desc', level: 'Intermediate'},
      {name: 'Java',file:'',description: 'desc', level: 'Elementary/Pre-intermediate'},
      {name: 'HTML,CSS',file:'',description: 'desc', level: 'Intermediate'},


    ];
  }

}
