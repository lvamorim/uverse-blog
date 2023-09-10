import { Component } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  articles = data
  
  constructor() {
    this.articles.forEach(article => {
      if (article['published-date']) {
        const date = new Date(article['published-date'])

        const formattedDate = date.toLocaleDateString('en', {
          timeZone: 'UTC',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })

        article['published-date'] = formattedDate
      }
    })
  }
}
