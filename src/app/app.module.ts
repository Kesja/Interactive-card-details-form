import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card/card-form/card-form.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
