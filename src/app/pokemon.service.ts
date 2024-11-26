import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<{ results: Pokemon[] }> {
    return this.http.get<{ results: Pokemon[] }>(`${this.apiUrl}?limit=20`);
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}
