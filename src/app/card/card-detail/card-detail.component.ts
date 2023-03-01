import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/card/card-data.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  constructor(public formData: CardDataService) {}

  ngOnInit(): void {}
}
