import { Component, Input } from '@angular/core';

@Component({
  template: `
    <h1>My {{framework}} Web component</h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() framework = 'Angular';
}
