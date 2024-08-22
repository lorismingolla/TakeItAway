import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [RouterLink],
    template: `<div style="background-color: black; width: 100%; height: 75%;
  display: flex;
  align-items: center;
  justify-content: center; flex-direction: column;">
    <img src="assets/images/logo.svg" alt="" style="background-color: white; max-width: 100%; max-height: 100%;"/>
</div>
<div style="width: 100%; height: 10vh; display: flex; flex-direction: column;">
    <button type="button" class="btn btn-light" style="width:100%" [routerLink]="['/order']">Order now!</button>
    <button type="button" class="btn btn-light" style="width:100%" [routerLink]="['/order']">Book a table</button>
</div>`
})

export class HomePageComponent  {

}