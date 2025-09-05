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
    EnvironmentInjector,
    inject,
    Inject,
    Injector,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    runInInjectionContext,
    signal,
    SimpleChanges,
    WritableSignal
} from '@angular/core';
import { timer } from 'rxjs';
import { API_KEY, logAndNotify, LoggerService, NewLoggerService } from '../../../services/logger.service';
import { Child } from '../child/child';



@Component( {
    selector: 'app-parent',
    imports: [ CommonModule, Child ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ LoggerService, { provide: API_KEY, useValue: 'ABC-123-XYZ' } ]
} )
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
    public title = 'parent';
    public user = { name: 'Dima', age: 23 };
    public timerSignal: WritableSignal<number> = signal( 0 );

    private injector = inject( Injector );
    private envInjector = inject( EnvironmentInjector );

    constructor(
        private cdr: ChangeDetectorRef,
        private appref: ApplicationRef,
        private ngZone: NgZone,
        public logger: LoggerService,
        @Inject( API_KEY ) private apiKey: string,
        @Optional() private newLogger?: NewLoggerService,
    )
    {
        console.log( 'Parent.constructor' );
        console.log( 'this.apiKey', this.apiKey );
        timer( 3000 ).subscribe( () =>
        {
            this.title = 'PARENT';
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

    public onClick(): void
    {
        runInInjectionContext( this.injector, () =>
        {
            logAndNotify( 'Clicked' );
        } );
    }

    public getName(): string
    {
        console.log( 'Parent.getName' );
        return 'Misha';
    }

}
