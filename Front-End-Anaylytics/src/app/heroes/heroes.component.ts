import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { HeroesService } from './heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Display hero
  /*hero : Hero = 
  {
    id: 1,
    name:  'Windstorm'
  }*/
  heroes : Hero[] ;
  //Select hero handler
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  constructor(private heroService: HeroesService) { }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
