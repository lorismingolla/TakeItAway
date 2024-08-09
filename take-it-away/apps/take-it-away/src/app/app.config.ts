import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { SUPABASE_CLIENT } from './app.component';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment.development';
import { Database } from '../shared/supabase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: SupabaseClient, useFactory: () => createClient<Database>(environment.supabaseUrl, environment.supabaseKey) }
  ],
};
