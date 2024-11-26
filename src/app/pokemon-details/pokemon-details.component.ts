import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.pokemonService.getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}
