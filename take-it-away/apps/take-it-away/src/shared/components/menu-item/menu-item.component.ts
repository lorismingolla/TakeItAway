import { Component, Input, OnInit } from '@angular/core';
import { PizzaWithToppings } from '../../types/PizzaTypes';

@Component({
    standalone: true,
    selector: 'app-menu-item',
    template: `
    <div class="container my-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="http://127.0.0.1:54321/storage/v1/object/public/public_images/pizzas/pizza-margherita.jpg" class="img-fluid rounded" alt="Pizza">
                        </div>
                        <div class="col-md-8">
                            <h5 class="card-title">{{pizza?.name}}</h5>
                            <p class="card-text">{{toppingText}}</p>
                            <p class="card-text"><strong>$ {{pizza?.base_price}}</strong></p>
                            <a href="#" class="btn btn-primary">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})

export class MenuItemComponent {
    @Input()
    pizza: PizzaWithToppings | undefined;
    
    get toppingText() {
        const lastTopping = this.pizza?.toppings.splice(this.pizza.toppings.length-1) as any
        return this.pizza?.toppings.map((x:any) => x.name).join(", ").concat(` and ${lastTopping[0].name}`)
    }
}