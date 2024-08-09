import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SupabaseService } from '../services/supabase-service';
import { InjectionToken } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment.development';
import { OrderPageComponent } from '../pages/order/order-page.component';

export const SUPABASE_CLIENT = new InjectionToken<SupabaseClient>('SupabaseClient', {
  providedIn: 'root',
  factory: () => createClient(environment.supabaseUrl, environment.supabaseKey)
});

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, OrderPageComponent] ,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #supabase = inject(SupabaseService);
  #router = inject(Router);
  
  session = this.#supabase.session
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.#supabase.authChanges((_, session) => (this.session = session));
  }
}
