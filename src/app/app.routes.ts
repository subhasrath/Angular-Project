import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path:"nav-bar",
        component: NavBarComponent
    },
    {
        path:"user-form",
        component: UserFormComponent
    },
];
