import { Component, DoCheck, EnvironmentInjector, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoggerService, OldLoggerService, servicefactory1 } from '../../../services/logger.service';

@Component( {
    selector: 'app-child',
    imports: [],
    templateUrl: './child.html',
    styleUrl: './child.scss',
    providers: [ { provide: LoggerService, useFactory: servicefactory1 } ]
} )
export class Child implements OnInit, OnChanges, DoCheck
{
    private logger: LoggerService = inject( LoggerService );
    private somelogger: OldLoggerService = inject( OldLoggerService );
    private envInjector = inject( EnvironmentInjector );


    constructor()
    {
        console.log( 'Child.constructor' );
    }

    ngOnChanges( changes: SimpleChanges )
    {
        console.log( 'Child.ngOnChanges' );
    }

    ngOnInit(): void
    {
        console.log( 'Child.ngOnInit' );
    }

    ngDoCheck()
    {
        console.log( 'Child.ngDoCheck' );
    }


}
