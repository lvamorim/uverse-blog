import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass']
})
export class MenuBarComponent {
  links = [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'about',
      href: 'about'
    },
    {
      label: 'contact',
      href: 'contact'
    }
  ]
  openMenu: string = ''
  menuIcon: boolean = true
  ariaLabel: string = 'Open menu'
  
  toggleMenu() {
    if (this.ariaLabel === 'Open menu') {
      this.ariaLabel = 'Close menu'
      this.menuIcon = false
      this.openMenu = 'open'
    }

    else {
      this.ariaLabel = 'Open menu'
      this.menuIcon = true
      this.openMenu = ''
    }
  }
}
