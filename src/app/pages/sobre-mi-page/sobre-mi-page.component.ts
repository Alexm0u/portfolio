import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi-page',
  templateUrl: './sobre-mi-page.component.html',
  styleUrls: ['./sobre-mi-page.component.css']
})
export class SobreMiPageComponent {

  sobreMiListState: boolean = false;
  contactoListState: boolean = false;
  softListState: boolean = false;
  tecListState: boolean = false;

  toggleList(listName: string) {
    switch (listName) {
      case 'sobreMi':
        this.sobreMiListState = !this.sobreMiListState;
        break;
      case 'contacto':
        this.contactoListState = !this.contactoListState;
        break;
      case 'soft':
        this.softListState = !this.softListState;
        break;
      case 'tec':
        this.tecListState = !this.tecListState;
        break;
      default:
        break;
    }
  }
}
