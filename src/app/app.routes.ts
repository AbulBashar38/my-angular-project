import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouteTestComponent } from './route-test/route-test.component';

export const routes: Routes = [
    {
        path:'routeTest',
        component:RouteTestComponent,
        title: 'Route test Page'
    },
    {
        path:'',
        component:HomeComponent,
        title: 'Home Page'
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title: 'Home Page'
    },
];
