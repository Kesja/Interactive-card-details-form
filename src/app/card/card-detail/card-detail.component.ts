import { ICardModel } from './../card-form/card.model';
import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/card/card-data.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  public newCard: ICardModel = {
    fullName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cvc: '',
  };

  constructor(public formData: CardDataService) {}

  ngOnInit(): void {}
}
