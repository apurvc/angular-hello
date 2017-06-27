import { Component,OnInit } from '@angular/core';

import { Hero, HERROARR } from './hero';
import { HeroService } from './service/hero.service'



@Component({
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log(hero.name);
    this.selectedHero = hero;
  };
  constructor(private heroService: HeroService) { }
  ngOnInit(): void{
    this.getHeroes();
  } 
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  heroes:  Hero[];
}