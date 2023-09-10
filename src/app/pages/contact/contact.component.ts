import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  contacts = [
    {
      label: 'GitHub',
      href: 'https://github.com/lvamorim'
    },
    {
      label: 'Email',
      href: 'mailto:lvamorim.dev@gmail.com'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lvamorim/'
    }
  ]
}
