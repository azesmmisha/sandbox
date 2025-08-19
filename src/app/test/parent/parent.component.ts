import { CommonModule } from '@angular/common';
import
{
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ApplicationRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    signal,
    SimpleChanges,
    WritableSignal
} from '@angular/core';

@Component( {
    selector: 'app-parent',
    imports: [ CommonModule ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    changeDetection: ChangeDetectionStrategy.Default
} )
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

    public title = 'parent';
    public user = { name: 'Dima', age: 23 };
    public timer: WritableSignal<number> = signal( 0 );

    constructor(
        private cdr: ChangeDetectorRef,
        private appref: ApplicationRef,
        private ngZone: NgZone
    )
    {
        console.log( 'Parent.constructor' );
        this.ngZone.runOutsideAngular( () =>
        {
            setTimeout( () => this.user.age = 77, 3000 );
        } );
    }

    ngOnChanges( changes: SimpleChanges )
    {
        console.log( 'Parent.ngOnChanges' );
    }

    ngOnInit()
    {
        console.log( 'Parent.ngOnInit' );
    }

    ngDoCheck()
    {
        console.log( 'Parent.ngDoCheck' );
    }

    ngAfterContentInit()
    {
        // console.log( 'ngAfterContentInit' );
    }

    ngAfterContentChecked()
    {
        // console.log( 'ngAfterContentChecked' );
    }

    ngAfterViewInit()
    {
        // console.log( 'ngAfterViewInit' );
    }

    ngAfterViewChecked()
    {
        // console.log( 'ngAfterViewChecked' );
    }

    ngOnDestroy()
    {
        console.log( 'Parent.ngOnDestroy' );
    }

    public getName(): string
    {
        console.log( 'Parent.getName' );
        return 'Misha';
    }

}
