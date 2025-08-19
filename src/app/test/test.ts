import { AsyncPipe, CommonModule } from '@angular/common';
import { ApplicationRef, ChangeDetectorRef, Component, DoCheck, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";

class User
{
    firstName: string = '';
    lastName: string = '';
}

@Component( {
    selector: 'app-test',
    imports: [ AsyncPipe, CommonModule, ParentComponent ],
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
