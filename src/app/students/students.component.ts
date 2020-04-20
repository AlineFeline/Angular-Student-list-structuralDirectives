import { Component } from '@angular/core';
import {IStudent} from './student';

@Component ({
selector: 'app-students',
templateUrl: 'students.component.html',
styleUrls: ['students.component.css']

})
export class StudentComponent {
titlePage: string = 'Jr. Kindergarden Class of 2020';
students: IStudent [] = [
    { name: 'John Smith',
      age: 4,
      hobbies: 'sports',
      favouriteFood: `John loves ice cream.`},
    { name: 'ML Carpenter',
      age: 5,
      hobbies: 'crafts',
      favouriteFood: `ML loves tofu.`},
    { name: 'Maggie Joe',
      age: 6,
      hobbies: 'reading',
      favouriteFood: ` Maggie loves brocolli.`},
    { name: 'Pam Baker',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Pam loves orange juice.`},
    { name: 'Jefferson Hills',
      age: 5,
      hobbies: 'hockey',
      favouriteFood: `Jefferson loves burgers.`},
    { name: 'Carmen Santiago',
      age: 6,
      hobbies: 'painting',
      favouriteFood: `Carmen loves fries.`},
    { name: 'Will Jay',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Will loves pizza.`},
    { name: 'Kate Smith',
      age: 5,
      hobbies: 'painting',
      favouriteFood: ` Kate loves strawberry smoothies.`
      }   
  ]
}