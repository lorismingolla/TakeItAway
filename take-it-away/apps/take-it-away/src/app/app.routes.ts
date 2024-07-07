import { Route } from '@angular/router';
import { HomePageComponent } from '../pages/home/home-page.component';
import { OrderPageComponent } from '../pages/order/order-page.component';

export const appRoutes: Route[] = [{ pathMatch: 'full', path: "", component: HomePageComponent }, { path: "order", component: OrderPageComponent}];
