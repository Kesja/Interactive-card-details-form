import { ICardModel } from './card-form/card.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {

    fullName!: string;
    cardNumber!: string;
    cardMonth!: string;
    cardYear!: string;
    cvc!: string;



  //public cardData = [];

  //public cardData: string | undefined;

  getCardData(cardData: ICardModel): Observable<ICardModel> {
    return of(cardData);
  }

  updateInputs(fullName: string, cardNumber: string, cardMonth: string, cardYear: string, cvc: string) {
    this.fullName = fullName;
    this.cardNumber = cardNumber;
    this.cardMonth = cardMonth;
    this.cardYear = cardYear;
    this.cvc = cvc;
  }

  constructor() {}
}
