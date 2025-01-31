import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';
import { FILES } from './constants/app.constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, SidebarComponent, ExplorerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shrey';
  pageIcon = "";
  pageName = "";

  pages = FILES;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let pagename = event.urlAfterRedirects.split('/')[1];
      if (pagename === '' || !pagename) {
        pagename = "home";
      }
      let pageVal = this.pages.filter(page => page.route === pagename)[0];
      this.pageName = pageVal.fileName;
      this.pageIcon = pageVal.icon;
    });
  }
}
