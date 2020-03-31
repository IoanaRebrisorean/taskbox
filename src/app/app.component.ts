// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'taskbox';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-inbox-screen></app-inbox-screen>
  `,
})
export class AppComponent {
  title = 'taskbox';
}
