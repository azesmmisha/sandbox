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
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

    public title = 'parent';
    public timer: WritableSignal<number> = signal( 0 );

    constructor(
        private cdr: ChangeDetectorRef,
        private appref: ApplicationRef,
        private ngZone: NgZone
    )
    {
        this.ngZone.runOutsideAngular( () =>
        {
            setTimeout( () =>
            {
                this.title = 'parent really';
                console.log( 'Title changed outside Angular' );
            }, 3000 );
        } );
        setInterval( () =>
        {
            this.timer.set( this.timer() + 1 );
        }, 1000 );
    }

    ngOnChanges( changes: SimpleChanges )
    {
        console.log( 'ngOnChanges', changes );
    }

    ngOnInit()
    {
        console.log( 'ngOnInit' );
    }

    ngDoCheck()
    {
        console.log( 'ngDoCheck' );
    }

    ngAfterContentInit()
    {
        console.log( 'ngAfterContentInit' );
    }

    ngAfterContentChecked()
    {
        console.log( 'ngAfterContentChecked' );
    }

    ngAfterViewInit()
    {
        console.log( 'ngAfterViewInit' );
    }

    ngAfterViewChecked()
    {
        console.log( 'ngAfterViewChecked' );
    }

    ngOnDestroy()
    {
        console.log( 'ngOnDestroy' );
    }

    private changeTitle(): void
    {
        this.title = 'title chnageeeed';
    }

    public onBtnClick(): void
    {

    }

    public getTitle(): string
    {
        console.log( 'getTitle()' );
        return 'Title from function';
    }

}
