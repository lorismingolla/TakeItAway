import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [RouterLink],
    template: `<div style="background-color: black; width: 100vw; height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center; flex-direction: column;">
    <img src="assets/images/logo.svg" alt="" style="width: 100vw; background-color: white; "/>
</div>
<div style="width: 100%; height: 10vh; flex-direction: column;">
    <button type="button" class="btn btn-light" style="width:100%" [routerLink]="['/order']">Order now!</button>
    <button type="button" class="btn btn-light" style="width:100%" [routerLink]="['/order']">Book a table</button>
</div>`
})

export class HomePageComponent  {

}