import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component( {
    selector: 'app-grand-parent',
    imports: [],
    templateUrl: './grand-parent.component.html',
    styleUrl: './grand-parent.component.scss'
} )
export class GrandParentComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked
{

    constructor()
    {
        console.log( 'GrandParent.constructor' );
    }

    ngOnChanges( changes: SimpleChanges ): void
    {
        console.log( 'GrandParent.ngOnChanges\n', changes );
    }

    ngOnInit(): void
    {
        console.log( 'GrandParent.ngOnInit' );
    }

    ngDoCheck(): void
    {
        console.log( 'GrandParent.ngDoCheck' );
    }

    ngAfterContentInit(): void
    {
        console.log( 'GrandParent.ngAfterContentInit' );
    }

    ngAfterContentChecked(): void
    {
        console.log( 'GrandParent.ngAfterContentChecked' );
    }

    ngAfterViewInit(): void
    {
        console.log( 'GrandParent.ngAfterViewInit' );
    }

    ngAfterViewChecked(): void
    {
        console.log( 'GrandParent.ngAfterViewChecked' );
    }

    ngOnDestroy(): void
    {
        console.log( 'GrandParent.ngOnDestroy' );
    }

    public showValue(): string
    {
        console.log( 'GrandParent.showValue' );
        return 'CD: Default';
    }

}
