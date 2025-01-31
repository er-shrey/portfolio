import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GithubComponent } from './pages/github/github.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home.ts',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'about.html',
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'contact.css',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'projects.json',
    },
    {
        path: 'github',
        component: GithubComponent,
        title: 'github.git',
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: '**',
        redirectTo: ''
    },
];
