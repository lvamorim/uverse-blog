import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back-home',
  templateUrl: './button-back-home.component.html',
  styleUrls: ['./button-back-home.component.sass']
})
export class ButtonBackHomeComponent {
  constructor(private route: Router) {}

  backHome() {
    this.route.navigate(['/'])
  }
}
