import { Routes } from '@angular/router';
import { Crm } from './crm/crm';
import { Test } from './test/test';

export const routes: Routes = [
    { path: '', redirectTo: 'crm', pathMatch: 'full' },
    { path: 'crm', component: Crm },
    { path: 'test', component: Test },
];
