import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component( {
    selector: 'app-items-list',
    imports: [ CommonModule, ItemListComponent ],
    templateUrl: './items-list.component.html',
    styleUrl: './items-list.component.scss'
} )
export class ItemsListComponent
{
    public fruits = [
        { id: 1, fruit: 'Apple', color: 'Red', amount: 10, vitamins: [ 'A', 'C', 'E' ] },
        { id: 2, fruit: 'Banana', color: 'Yellow', amount: 25, vitamins: [ 'B6', 'C' ] },
        { id: 3, fruit: 'Orange', color: 'Orange', amount: 15, vitamins: [ 'C' ] },
        { id: 4, fruit: 'Kiwi', color: 'Green', amount: 8, vitamins: [ 'C', 'E', 'K' ] },
        { id: 5, fruit: 'Blueberry', color: 'Blue', amount: 40, vitamins: [ 'C', 'K' ] }
    ];

    change(): void
    {
        if( this.fruits.length > 0 )
        {
            // this.fruits = [
            //     { id: 1, fruit: 'Apple', color: 'Green', amount: 0, vitamins: [ 'A', 'C', 'E' ] },
            //     { id: 2, fruit: 'Banana', color: 'Yellow', amount: 0, vitamins: [ 'B6', 'C' ] },
            //     { id: 3, fruit: 'Orange', color: 'Orange', amount: 0, vitamins: [ 'C' ] },
            //     { id: 4, fruit: 'Kiwi', color: 'Green', amount: 0, vitamins: [ 'C', 'E', 'K' ] },
            //     { id: 5, fruit: 'Blueberry', color: 'Blue', amount: 0, vitamins: [ 'C', 'K' ] }
            // ];
            this.fruits[ 3 ] = { id: 8, fruit: 'Kiwi', color: 'Green', amount: 0, vitamins: [ 'C', 'E', 'K' ] };
        }
    }

    trackById( index: number, item: any ): number
    {
        return item.id;
    }
}
