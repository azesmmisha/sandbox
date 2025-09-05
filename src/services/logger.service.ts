import { inject, Injectable, InjectionToken } from '@angular/core';

export const servicefactory1 = () =>
{
    console.log( 'servicefactory1' );
    if( true )
    {
        return new LoggerService;
    }
    else
    {
        return new NewLoggerService;
    }
};

@Injectable()
export class LoggerService
{
    public id: number = Math.floor( Math.random() * 1001 );
    public name: string = 'Logger ' + this.id;

    public log( message: unknown ): void
    {
        console.log( `${this.name}:`, message );
    }
}

@Injectable()
export class NewLoggerService
{
    public id: number = Math.floor( Math.random() * 1001 );
    public name: string = 'NewLogger ' + this.id;

    public log( message: unknown ): void
    {
        console.log( `${this.name}:`, message );
    }
}

@Injectable( {
    providedIn: 'root',
    useFactory: () => { return new NewLoggerService(); }
} )
export class OldLoggerService
{
    public id: number = Math.floor( Math.random() * 1001 );
    public name: string = 'OldLogger ' + this.id;

    public log( message: unknown ): void
    {
        console.log( `${this.name}:`, message );
    }
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

@Injectable( { providedIn: 'root' } )
export class UserService
{
    // В реальном приложении имя пользователя пришло бы после логина
    readonly currentUserName = 'admin';
}

export const API_KEY = new InjectionToken<string>( 'app.api-key' );

export const SESSION_ID = new InjectionToken<string>( 'session.id', {
    providedIn: 'root',

    factory: () =>
    {
        // ВНУТРИ ФАБРИКИ ДОСТУПЕН DI-КОНТЕКСТ
        const userService = inject( UserService );
        const randomNum = Math.floor( Math.random() * 1000 );
        return `${userService.currentUserName}-${randomNum}`;
    }
} );

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

@Injectable( { providedIn: 'root' } )
export class NotificationService
{
    notify( msg: string ) { alert( msg ); }
}

export function logAndNotify( message: string )
{
    const notifier = inject( NotificationService );

    notifier.notify( `Notification: ${message}` );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

@Injectable( { providedIn: 'root' } )
export class LoggerService1
{
    public id: number = Math.floor( Math.random() * 1001 );
    public name: string = 'Logger ' + this.id;

    public log( message: unknown ): void
    {
        console.log( `${this.name}:`, message );
    }
}