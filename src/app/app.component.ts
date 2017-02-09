import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routherLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routherLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-oultet></router-outlet>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
