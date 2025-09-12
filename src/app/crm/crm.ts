import { Component } from '@angular/core';
import { ContentComponent } from '../components/cd-test/content/content.component';
import { GrandParentComponent } from "../components/cd-test/grand-parent/grand-parent.component";
import { ItemsListComponent } from '../components/for-test/items-list/items-list.component';

@Component( {
    selector: 'app-crm',
    imports: [ ItemsListComponent, GrandParentComponent, ContentComponent ],
    templateUrl: './crm.html',
    styleUrl: './crm.scss'
} )
export class Crm
{

}
