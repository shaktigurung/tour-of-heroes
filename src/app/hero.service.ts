import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messsageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //Todo: send the message after the fetching the heroes
    this.messsageService.add('HeroService: Fetched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    //Todo: send the message after fetching the hero
    this.messsageService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
