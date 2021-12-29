import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<input [(ngModel)]="name">>`
})

export class AppComponent {
    name = '';
}