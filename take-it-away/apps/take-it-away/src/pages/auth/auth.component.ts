import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { SupabaseService } from '../../services/supabase-service'

@Component({
    standalone: true,
    imports: [ReactiveFormsModule],
  selector: 'app-auth',
  template: `<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <p class="description">Sign in via magic link with your email below</p>
    <form [formGroup]="signInForm" (ngSubmit)="onSubmit()" class="form-widget">
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          formControlName="email"
          class="inputField"
          type="email"
          placeholder="Your email"
        />
        <input
          id="otp"
          formControlName="otp"
          class="inputField"
          type="password"
          placeholder="your otp"
          [hidden]="hideOtpField"
        />
      </div>
      <div>
        <button type="submit" class="button block" [disabled]="loading">
          {{ loading ? 'Loading' : 'Send magic link' }}
        </button>
      </div>
    </form>
  </div>
</div>`
})
export class AuthComponent {
  loading = false
  hideOtpField = true;
  
  signInForm = this.formBuilder.group({
    email: '',
    otp:''
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    if(this.hideOtpField){
      try {
        this.loading = true
        const email = this.signInForm.value.email as string
        const { error } = await this.supabase.signIn(email)
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false;
        this.hideOtpField = false;
        }
    }
    else {
      try {
        this.loading = true
        const email = this.signInForm.value.email as string
        const otp = this.signInForm.value.otp as string
        const { error } = await this.supabase.signIn(email)
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false;
        this.hideOtpField = false;
        }
    }
  }
}