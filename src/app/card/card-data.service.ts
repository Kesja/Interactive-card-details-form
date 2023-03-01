import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  fullName!: string;
  cardNumber!: string;
  cardMonth!: string;
  cardYear!: string;
  cvc!: string;

  constructor() {}
}
