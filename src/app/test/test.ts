import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class Test
{

}
