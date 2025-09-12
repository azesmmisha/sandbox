import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component( {
    selector: 'app-content',
    imports: [],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
} )
export class ContentComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked
{

    constructor()
    {
        console.log( 'Content.constructor' );
    }

    ngOnChanges( changes: SimpleChanges ): void
    {
        console.log( 'Content.ngOnChanges\n', changes );
    }

    ngOnInit(): void
    {
        console.log( 'Content.ngOnInit' );
    }

    ngDoCheck(): void
    {
        console.log( 'Content.ngDoCheck' );
    }

    ngAfterContentInit(): void
    {
        console.log( 'Content.ngAfterContentInit' );
    }

    ngAfterContentChecked(): void
    {
        console.log( 'Content.ngAfterContentChecked' );
    }

    ngAfterViewInit(): void
    {
        console.log( 'Content.ngAfterViewInit' );
    }

    ngAfterViewChecked(): void
    {
        console.log( 'Content.ngAfterViewChecked' );
    }

    ngOnDestroy(): void
    {
        console.log( 'Content.ngOnDestroy' );
    }

    public showValue(): string
    {
        console.log( 'Content.showValue' );
        return 'CD: Default';
    }

}
