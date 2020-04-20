/* 
Instructions:

1. Create a student component and its template
2. The component will have two properties. 
  a) titlePage, of data type string, with the following value: 'Jr. Kindergarden Class of 2020'
  b) students, of data type any []. with the following values, an array of objects. 
   [
    {
      name: 'John Smith',
      age: 4,
      hobbies: 'sports',
      favouriteFood: `John loves <strong>ice cream</strong>.`
    },
    {
      name: 'ML Carpenter',
      age: 5,
      hobbies: 'crafts',
      favouriteFood: `ML loves <strong>tofu</strong>.`
    },
    {
      name: 'Maggie Joe',
      age: 6,
      hobbies: 'reading',
      favouriteFood: ` Maggie loves <strong>brocolli</strong>.`
    },
    {
      name: 'Pam Baker',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Pam loves <strong>orange juice</strong>.`
    },
    {
      name: 'Jefferson Hills',
      age: 5,
      hobbies: 'hockey',
      favouriteFood: `Jefferson loves <strong>burgers</strong>.`
    },
    {
      name: 'Carmen Santiago',
      age: 6,
      hobbies: 'painting',
      favouriteFood: `Carmen loves <strong>fries</strong>.`
    },
    {
      name: 'Will Jay',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Will loves <strong>pizza</strong>.`

    },
    {
      name: 'Kate Smith',
      age: 5,
      hobbies: 'painting',
      favouriteFood: ` Kate loves <strong>strawberry smoothies</strong>.`
    }
]

  3. For the template:
  a) display the title page
  b) Create a list that will display all the student's name and hobbies. hint: use *ngFor & interpolation  
  c) Create a second list that will display, only the students who are 4 years of age. The list will display their favourite food.hint: use *ngIf and property binding to display their favouirte food.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
