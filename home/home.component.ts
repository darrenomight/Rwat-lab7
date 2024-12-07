import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogCardComponent} from '../dog-card/dog-card.component';
import {Dog} from '../dog';

@Component({
  selector: 'app-home',
  imports: [CommonModule, DogCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
  <app-dog-card
    *ngFor="let dog of dogs"
    [dog]="dog"
  ></app-dog-card>
</section>

  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dogs: Dog[] = [
    {
      id: 0,
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: 3,
      photo: '/assets/dogs/dog0.jpg',
      city: 'New York',
      state: 'NY',
    },
    {
      id: 1,
      name: 'Bella',
      breed: 'Labrador Retriever',
      age: 2,
      photo: '/assets/dogs/dog1.jpg',
      city: 'Los Angeles',
      state: 'CA',
    },
    {
      id: 2,
      name: 'Max',
      breed: 'German Shepherd',
      age: 4,
      photo: '/assets/dogs/dog2.jpg',
      city: 'Chicago',
      state: 'IL',
    },
    {
      id: 3,
      name: 'Charlie',
      breed: 'Poodle',
      age: 5,
      photo: '/assets/dogs/dog3.jpg',
      city: 'San Francisco',
      state: 'CA',
    },
    {
      id: 4,
      name: 'Daisy',
      breed: 'Beagle',
      age: 4,
      photo: '/assets/dogs/dog4.jpg',
      city: 'Seattle',
      state: 'WA',
    },
    {
      id: 5,
      name: 'Rocky',
      breed: 'Boxer',
      age: 6,
      photo: '/assets/dogs/dog5.jpg',
      city: 'Denver',
      state: 'CO',
    },
    {
      id: 6,
      name: 'Luna',
      breed: 'Husky',
      age: 2,
      photo: '/assets/dogs/dog6.jpg',
      city: 'Anchorage',
      state: 'AK',
    },
    {
      id: 7,
      name: 'Milo',
      breed: 'Dachshund',
      age: 1,
      photo: '/assets/dogs/dog7.jpg',
      city: 'Austin',
      state: 'TX',
    },
    {
      id: 8,
      name: 'Zoe',
      breed: 'Shih Tzu',
      age: 7,
      photo: '/assets/dogs/dog8.jpg',
      city: 'Orlando',
      state: 'FL',
    },
    
    
  ];
}
