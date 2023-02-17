import { ICardModel } from './card.model';
import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/card/card-data.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {

  cardForm!: FormGroup | ICardModel[];

  public newCard: ICardModel = {
    fullName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cvc: '',
  };

  constructor(private fb: FormBuilder, public cardDataService: CardDataService) {
   ;
  }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      fullName: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[ 0-9]*$'),
          Validators.minLength(17),
        ],
      ],
      cardMonth: ['', Validators.required],
      cardYear: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }

  onChange(change: any) {
    this.cardDataService.updateInputs(
      this.newCard.fullName,
      this.newCard.cardNumber,
      this.newCard.cardMonth,
      this.newCard.cardYear,
      this.newCard.cvc
    );
    console.log(this.newCard.cardNumber);
    console.log(this.newCard.fullName);
  }

  onSubmit(form: FormGroup) {

    /* this.cardDataService.getCardData(this.newCard).subscribe(
      result => console.log('result', result),
      error => console.log('error', error)
    ); */
  }
}

