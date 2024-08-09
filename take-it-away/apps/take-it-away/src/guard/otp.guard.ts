import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { SupabaseService } from '../services/supabase-service';

export const otpGuard: CanActivateFn = async (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const supabaseService = inject(SupabaseService);
  const token = route.fragment?.startsWith("access_token=") ? route.fragment.split("&")[0].split('=')[1] : "";
  console.log("Authenticated: " + await supabaseService.isAuthenticated());
  if (token) {
    await supabaseService.verifySignin(token);
    console.log("Authenticated: " + await supabaseService.isAuthenticated());
  }
  return true;
};