import { Injectable } from '@angular/core';
import { Hero, HERROARR } from '../hero';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HERROARR);
    }
    /* return const array
    getHeroes(): Hero[] {
        return HERROARR;
    }*/

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 10000);
        });
    }
}