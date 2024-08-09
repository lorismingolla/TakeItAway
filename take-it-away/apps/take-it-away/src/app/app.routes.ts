import { Route } from '@angular/router';
import { HomePageComponent } from '../pages/home/home-page.component';
import { OrderPageComponent } from '../pages/order/order-page.component';
import { authGuard } from '../guard/auth.guard';
import { AuthComponent } from '../pages/auth/auth.component';
import { otpGuard } from '../guard/otp.guard';

export const appRoutes: Route[] = [
    {
        path: '', canActivateChild: [otpGuard], children: [
            { pathMatch: 'full', path: "", component: HomePageComponent },
            { path: "order", component: OrderPageComponent, canActivate: [authGuard] },
            { path: 'login', component: AuthComponent }]
    }
];
