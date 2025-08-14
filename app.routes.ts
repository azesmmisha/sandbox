import { Routes } from '@angular/router';
import { Layot } from './common-ui/layot/layot';
import { canActivateAuth } from './data/access.guard';
import { LoginPage } from './pages/login-page/login-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { SearchPage } from './pages/search-page/search-page';

export const routes: Routes = [
    {
        path: '', component: Layot,
        children: [
            { path: '', component: SearchPage },
            { path: 'profile/:id', component: ProfilePage },
        ],
        canActivate: [ canActivateAuth ]
    },
    { path: 'login', component: LoginPage },
];
