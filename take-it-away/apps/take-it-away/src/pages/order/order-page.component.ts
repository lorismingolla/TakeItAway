import { Component, OnInit, inject } from '@angular/core';
import { MenuItemComponent } from '../../shared/components/menu-item/menu-item.component';
import { PrismaClient } from '@prisma/client';

@Component({
    standalone: true,
    imports: [MenuItemComponent],
    selector: 'app-order-page',
    templateUrl: 'order-page.component.html'
})

export class OrderPageComponent {
    prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
        this.prisma.pizzas.findMany().then(x => console.log(x))
    }
}