import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/cv.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() data: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
