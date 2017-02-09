import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styles: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit():void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
