import { Component, Input } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-card',
  template: `
    <article class="dog-card">
      <img class="dog-photo" [src]="dog.photo" [alt]="dog.name" />
      <h2>{{ dog.name }}</h2>
      <p>Breed: {{ dog.breed }}</p>
      <p>Age: {{ dog.age }} years</p>
      <p>Location: {{ dog.city }}, {{ dog.state }}</p>
    </article>
  `,
  styleUrls: ['./dog-card.component.css'],
})
export class DogCardComponent {
  @Input() dog!: Dog;
}
