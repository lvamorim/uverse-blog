import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {
  id: string = ''
  article: any

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      this.article = data.find(article => article.id === this.id)
    });
  }
}
