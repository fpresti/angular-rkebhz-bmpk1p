export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    available: true,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    available: true,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    available: false,
  },
  {
    id: 4,
    name: 'Phone Fede',
    price: 1000,
    description: 'Best phone ever',
    available: true,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
