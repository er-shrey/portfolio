import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-github',
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {
  githubData: any;

  constructor() {
    this.fetchGitHubData();
  }

  /**
   * Fetch er-shrey git data
   */
  async fetchGitHubData() {
    const username = 'er-shrey'; // GitHub username
    const apiUrl = `https://api.github.com/users/${username}`;
    const data = await fetch(apiUrl);
    this.githubData = await data.json();
  }

  goToGithub() {
    window.open("https://github.com/er-shrey", "_blank");
  }
}
