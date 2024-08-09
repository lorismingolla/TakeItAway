import { Component, OnInit, inject } from '@angular/core';
import { MenuItemComponent } from '../../shared/components/menu-item/menu-item.component';
import { PrismaClient } from '@prisma/client';
import { QueryData, SupabaseClient } from '@supabase/supabase-js';
import { AsyncPipe, NgFor } from '@angular/common';
import { PizzaWithToppings } from '../../shared/types/PizzaTypes';
import { Database } from '../../shared/supabase';
@Component({
    standalone: true,
    imports: [MenuItemComponent, NgFor, AsyncPipe],
    selector: 'app-order-page',
    templateUrl: 'order-page.component.html'
})

export class OrderPageComponent implements OnInit{
    supabase = inject(SupabaseClient<Database>);
    pizzas: PizzaWithToppings[] =[];
    
    constructor() {
    }

    async ngOnInit() {
        this.pizzas = await this.getPizzas();
    }

    async getPizzas() {
        const pizzaquery = this.supabase
            .from('pizzas')
            .select('*, toppings(*)').returns<PizzaWithToppings[]>()
        const { data, error } = await pizzaquery;
        if (error) throw error;
        const bucketData = (await this.supabase.storage.from('images_public').list())
        console.log(bucketData)
        return data ?? [];
    }
}
