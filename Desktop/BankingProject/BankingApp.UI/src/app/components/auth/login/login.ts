import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials = {
    tckn: '',
    password: ''
  };
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    if (this.credentials.tckn && this.credentials.password) {
      this.loading = true;
      
      this.authService.login(this.credentials.tckn, this.credentials.password)
        .subscribe({
          next: (success) => {
            if (success) {
              this.router.navigate(['/dashboard']);
            }
          },
          error: (error) => {
            console.error('Login error:', error);
            this.loading = false;
          },
          complete: () => {
            this.loading = false;
          }
        });
    }
  }
}