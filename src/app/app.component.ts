import { Component } from '@angular/core';

import { Hero, HERROARR } from './hero';
import { HeroService } from './service/hero.service'



@Component({
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log(hero.name);
    this.selectedHero = hero;
  };
  constructor(private heroService: HeroService) { }

  heroes = this.heroService.getHeroes();
}