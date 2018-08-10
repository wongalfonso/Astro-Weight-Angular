import { Component } from '@angular/core';
import { element } from '../../../node_modules/@angular/core/src/render3/instructions';


@Component({
  selector: 'app-form',
  templateUrl: '../html/app.form.html',
  styleUrls: ['../css/app.form.css']
})

export class AppForm {

  planets: any[];
  noPluto: any[];
  message: string;
  isPluto: boolean = false;
  labelMessage: string;
  

  onClick(e, weight, planetInfo) {
    e.preventDefault();
    const planet = planetInfo.split(',')
    const name = planet[0]
    const value = planet[1]
    const newWeight = Number(weight) * Number(value);
    let message = 'If you were on ' + name + ', You would weigh ' + newWeight.toFixed(2) + 'lbs'
    this.message = message;
  }

  removePluto(element: HTMLInputElement) {
    if (element.checked) {
      this.noPluto.splice(10, 1);
      this.planets = this.noPluto;
      this.labelMessage = 'How Dare You Remove Pluto'
    } else if (!element.checked){
      this.planets = planets;
      this.labelMessage = 'Click to remove Pluto'
    }

  }

  constructor() {
    const allPlanets = planets;    
    this.planets = allPlanets.reverse();
    this.noPluto = planets.slice();
    this.labelMessage = 'Click to remove Pluto';
  }

}

const planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['The Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['The Sun', 27.9]
];
