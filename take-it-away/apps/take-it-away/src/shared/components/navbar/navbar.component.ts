import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterLink],
    selector: 'app-navbar',
    template: `<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
 <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizza Palace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/order']">Order now!</a>
        </li>
        </ul>
    </div>
  </div>
</nav>`
})

export class NavbarComponent {
}