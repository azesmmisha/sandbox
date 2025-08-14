import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { JsonConvert, JsonObject, JsonProperty } from "json2typescript";
import { map, Observable } from 'rxjs';


@JsonObject( "PokemonListEntry" )
export class PokemonListEntry
{
    @JsonProperty( "name", String )
    name: string = "";

    @JsonProperty( "url", String )
    url: string = "";
}

@JsonObject( "ListResponse" )
export class ListResponse
{
    @JsonProperty( "count", Number )
    count: number = 0;

    @JsonProperty( "next", String, true )
    next: string | null = null;

    @JsonProperty( "previous", String, true )
    previous: string | null = null;

    @JsonProperty( "results", [ PokemonListEntry ] )
    results: PokemonListEntry[] = [];
}

@Injectable( {
    providedIn: 'root'
} )
export class PokemonService
{
    private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    private jsonConvert: JsonConvert = new JsonConvert();

    private http = inject( HttpClient );

    public getPokemonList( limit: number = 20, offset: number = 0 ): Observable<ListResponse>
    {
        const params = new HttpParams()
            .set( 'limit', limit.toString() )
            .set( 'offset', offset.toString() );

        return this.http.get<any>( this.baseUrl, { params } ).pipe(
            map( ( result: ListResponse ) =>
            {
                const resp = this.jsonConvert.deserialize( result, ListResponse );
                return resp;
            } )
        );
    }
}
