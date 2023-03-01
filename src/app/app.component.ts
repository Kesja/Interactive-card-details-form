import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-card-details-form';
  mobile: boolean = false;

  ngOnInit() {
    if (window.screen.width < 1000) {
      this.mobile = true;
    } else if (window.screen.height < 900) {
      this.mobile = true;
    }
  }
}
