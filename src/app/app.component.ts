import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  path: string = '../assets/images/logo.png';
  alttext: string = 'first image';
  title = 'Sistema de Chamados';
}
