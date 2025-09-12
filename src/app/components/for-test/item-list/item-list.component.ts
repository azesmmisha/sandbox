import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component( {
    selector: 'app-item-list',
    imports: [CommonModule],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.scss'
} )
export class ItemListComponent implements OnInit, OnDestroy
{
    @Input()
    public item!: any;

    ngOnInit(): void
    {
        console.log( `ItemList.onInit ${this.item.id}` );
    }

    ngOnDestroy(): void
    {
        console.log( `ItemList.onDestroy ${this.item.id}` );
    }
}
