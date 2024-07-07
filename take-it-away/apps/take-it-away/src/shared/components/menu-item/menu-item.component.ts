import { Component, OnInit } from '@angular/core';

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
                            <img src="https://example.com/pizza.jpg" class="img-fluid rounded" alt="Pizza">
                        </div>
                        <div class="col-md-8">
                            <h5 class="card-title">Margherita Pizza</h5>
                            <p class="card-text">Classic delight with 100% real mozzarella cheese, vine-ripened tomatoes, and fresh basil.</p>
                            <p class="card-text"><strong>$9.99</strong></p>
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

}