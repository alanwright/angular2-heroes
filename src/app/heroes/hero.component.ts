import { Component, Input } from 'angular2/core';

import { Hero } from './hero.model';

@Component({
    selector: 'hero',
    templateUrl: 'app/heroes/hero.component.html'
})

export class HeroComponent {
    // data flows into a component via inputs expressed by decorators like this
    @Input() hero: Hero;

    // data flows out of a component via outputs expressed by decorators like this
    // @Output() rate: EventEmitter;
}
