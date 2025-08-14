import
{
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

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
    ]
} )
export class App
{
    public isSidenav = signal<boolean>( true );
}
