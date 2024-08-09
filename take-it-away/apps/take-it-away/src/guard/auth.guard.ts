import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase-service';

export const authGuard: CanActivateFn = async () => {
  const supabaseService = inject(SupabaseService);
  const router = inject(Router);
  const isAuthenticated = await supabaseService.isAuthenticated();
  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};