import { Component, Input } from 'angular2/core';

import { Hero } from './hero.model';

@Component({
    selector: 'hero',
    templateUrl: 'app/heroes/hero.component.html'
})

export class HeroComponent {
    @Input() hero: Hero;
}