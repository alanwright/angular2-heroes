import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css'],
    directives: [HeroComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    private heroes: Hero[];
    private selectedHero: Hero;
    private heroService: HeroService;

    constructor(heroService: HeroService) {
        this.heroService = heroService;
    }

    public ngOnInit() {
        this.heroes = this.heroService.getHeroes();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
