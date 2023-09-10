import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.sass']
})
export class ArticleCardComponent {
  @Input() id: string = ''
  @Input() cover: string = ''
  @Input() publishedDate: string = ''
  @Input() title: string = ''
  @Input() content: string = ''

  constructor(private router: Router) {}

  openArticle(id: string) {
    this.router.navigate([`article/${id}`])
  }
}
