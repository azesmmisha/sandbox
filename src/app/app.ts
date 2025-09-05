import
{
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { Component, signal, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoggerService1 } from '../services/logger.service';

@Component( {
    selector: 'app-root',
    imports: [ RouterOutlet, MatButtonModule, RouterLinkActive, RouterModule,
        MatIconModule
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    animations: [
        trigger( 'sidenavWidth', [
            state( 'expanded', style( { width: '200px' } ) ),
            state( 'collapsed', style( { width: '60px' } ) ),
            transition( 'expanded <=> collapsed', animate( '150ms ease-in-out' ) )
        ] )
    ],
    providers: []
} )
export class App
{
    public isSidenav = signal<boolean>( true );

    constructor( @SkipSelf() private logger1: LoggerService1 )
    {
        console.log( 'App.constructor' );
        logger1.log( 'app' );
    }
}
