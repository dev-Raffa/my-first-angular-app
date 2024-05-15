import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DetailsPage } from './pages/details/details.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Home Page',
    },
    {
        path: 'details/:id',
        component: DetailsPage,
        title: 'Home details'
    }
];
