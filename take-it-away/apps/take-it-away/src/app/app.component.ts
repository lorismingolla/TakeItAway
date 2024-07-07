import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment.development';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null
  title = 'take-it-away';
  /**
   *
   */
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.supabase.auth.signInWithPassword({ email: 'admin@takeitaway.com', password: 'Azerty123!' }).then(({ data })=> console.log(data));
    const pizzas = this.supabase.from("pizzas").select().then(x => console.log(x.data));
  }
  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }
}
