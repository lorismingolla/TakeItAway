import { Inject, Injectable, inject } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { Database } from '../shared/supabase'

export interface Profile {
  id?: string
  username: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
    _session: AuthSession | null = null
    supabase = inject(SupabaseClient)

  async verifySignin(token: string, email?: string) {
    if (email) {
      const { data, error } = await this.supabase.auth.verifyOtp({ token: token, email, type: 'email' })
      console.log("Verified magiclink: " + data)
      if (error) throw error;
      return true
    }
    const { data, error } = await this.supabase.auth.verifyOtp({ token_hash: token, type: 'email' })
    console.log("Verified magiclink: " + data)
    if (error) throw error;
    return true
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string) {
    return this.supabase.auth.signInWithOtp({ email, options: {
      emailRedirectTo: 'localhost:4200/order'
    } })
  }

  signOut() {
    return this.supabase.auth.signOut()
    }
    
  getUser() {
    return this.supabase.auth.getUser();
  }

  async isAuthenticated() {
    return !!this.session?.user;;
  }
}