import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CardDataService } from 'src/app/card/card-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidation } from './custom-validator.directive';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {

  @ViewChild('ccNumber') ccNumber?: ElementRef;
  cardForm!: FormGroup;
  @Input() fullName: any;
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public cardDataService: CardDataService,
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      fullName: ['', Validators.required],
      cardNumber: ['', [Validators.required, customValidation()]],
      cardMonth: ['', Validators.required],
      cardYear: ['', Validators.required],
      cvc: ['', Validators.required],
    });

    this.cardForm.valueChanges.subscribe((selectedValue) => {
      Object.assign(this.cardDataService, selectedValue)
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.submit = true;
    } else {
      this.cardForm.markAllAsTouched();
    }
  }

  continueButton(){
    this.submit = false;
    this.cardForm.reset();
  }

  creditCardNumberSpacing() {
    const input = this.ccNumber?.nativeElement;
    const { selectionStart } = input;
    const { cardNumber } = this.cardForm.controls;

    let trimmedCardNum = cardNumber.value.replace(/\s+/g, '');

    if (trimmedCardNum.length > 16) {
      trimmedCardNum = trimmedCardNum.substr(0, 16);
    }

    const partitions = [4, 4, 4, 4];
    const numbers: any[] = [];
    let position = 0;

    partitions.forEach((partition) => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    });

    cardNumber.setValue(numbers.join(' '));

    /* Handle caret position if user edits the number later */
    if (selectionStart < cardNumber.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
  }
}
