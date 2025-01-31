import { Component } from '@angular/core';
import { IProject } from '../../models/app.models';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  counter = 1;

  projects: IProject[] = [
    {
      name: "There are too many",
      description: "Let's discuss on a quick chat"
    },
    {
      name: "Few are open sourced",
      description: "Have you checked my github?"
    },
    {
      name: "Few are private",
      description: "I can only tell you about those but in private only..."
    },
    {
      name: "Organization projects",
      description: "Obviously there are many... but yeah, COC can't tell here..."
    },
  ]

  getCounter() {
    return this.counter++;
  }
}
