import { Injectable } from '@angular/core';
import { Hero, HERROARR } from '../hero';

@Injectable()
export class HeroService {
    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HERROARR);
    // }
    getHeroes(): Hero[]{
        return HERROARR;
    }
}