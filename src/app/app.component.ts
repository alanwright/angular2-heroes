import {Component} from 'angular2/core';

import { HeroesComponent } from './heroes/heroes.component';

@Component({
    selector: 'hero-app',
    template: '<h1>{{title}}</h1><heroes></heroes>',
    directives: [HeroesComponent]
})

export class AppComponent {
    title = 'Angular 2 Heroes!';
}
