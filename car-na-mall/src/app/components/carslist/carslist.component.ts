import { Component } from '@angular/core';

interface Car {
  model: string;
  doors: number;
  seats: number;
  transmission: string;
  cost: number;
  image: string;
  year: number;

}
@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})


export class CarslistComponent {
  carsLister: Car[] = [
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      year: 2018,
      cost: 100,
      image: '/assets/images/carslistbg.jpg',
  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      year: 2018,
      cost: 100,
      image: '/assets/images/carslistbg.jpg',

  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      cost: 100,
      year: 2018,
      image: '/assets/images/carslistbg.jpg',

  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      cost: 100,
      year: 2018,
      image: '/assets/images/carslistbg.jpg',

  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      cost: 100,
      year: 2018,
      image: '/assets/images/carslistbg.jpg',

  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      year: 2018,
      cost: 100,
      image: '/assets/images/carslistbg.jpg',

  },
    {
      model: 'Suzuki',
      doors: 4,
      seats: 5,
      transmission: 'manual',
      year: 2018,
      cost: 100,
      image: '/assets/images/carslistbg.jpg',
  },
  ]


}
