import { backendTech, webTech } from './../../core/technology';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  // breakpoint for gridlist
  breakpoint: number;

  // Array of objects in technolgy.ts
  webTech = webTech;
  backendTech = backendTech;


  // changes gridlist cols from 1 or 3 depending on viewport
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 770) ? 1 : 3;
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 770) ? 1 : 3;
  }

}
