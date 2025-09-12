import { AsyncPipe, CommonModule } from '@angular/common';
import { ApplicationRef, ChangeDetectorRef, Component, DoCheck, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ItemsListComponent } from "../components/for-test/items-list/items-list.component";
import { ParentComponent } from "./parent/parent.component";

class User
{
    firstName: string = '';
    lastName: string = '';
}

const IMPORTS = [
    ItemsListComponent, AsyncPipe, CommonModule, ParentComponent, ItemsListComponent
];

@Component( {
    selector: 'app-test',
    imports: IMPORTS,
    templateUrl: './test.html',
    styleUrl: './test.scss',
} )
export class Test implements OnInit, OnChanges, DoCheck, OnDestroy
{

    constructor(
        private cdr: ChangeDetectorRef,
        private appref: ApplicationRef,
        private ngZone: NgZone
    )
    {
        console.log( 'Test.constructor' );
    }

    ngOnChanges( changes: SimpleChanges )
    {
        console.log( 'Test.ngOnChanges' );
    }

    ngOnInit()
    {
        console.log( 'Test.ngOnInit' );
    }

    ngDoCheck()
    {
        console.log( 'Test.ngDoCheck' );
    }

    ngOnDestroy()
    {
        console.log( 'Test.ngOnDestroy' );
    }

    public getName(): string
    {
        console.log( 'Test.getName' );
        return 'Misha';
    }

}
