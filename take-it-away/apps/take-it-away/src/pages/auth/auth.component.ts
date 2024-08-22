import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { SupabaseService } from '../../services/supabase-service'

@Component({
    standalone: true,
    imports: [ReactiveFormsModule],
    selector: 'app-auth',
    styleUrls: ['./auth.component.css'],
  template: `<div class="row flex-center flex">
      <div>
            <p class="description">Sign in via magic link with your email below</p>

    <div class="form-widget d-flex justify-content-center" aria-live="polite">
      <form [formGroup]="signInForm" (ngSubmit)="onSubmit()" class="form-widget flex-column">
        <div class="flex-column">
          <label for="email">Email</label>
          <input
            id="email"
            formControlName="email"
            class="inputField"
            type="email"
            placeholder="Your email"
          />
          </div>
          <div [hidden]="hideOtpField" class="flex-column">
          <label for="otp" >One Time Password</label>
          <input
            id="otp"
            formControlName="otp"
            class="inputField"
            type="password"
            placeholder="your otp"
          />
          </div>
          <button type="submit" class="button block" [disabled]="loading">
            {{ loading ? 'Loading' : hideOtpField ? 'Send magic link' : 'Submit'}} 
          </button>
    </form>
  </div>
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
        const success = await this.supabase.verifySignin(otp, email)
        if (success)
        alert('Signed in! 🎊')
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