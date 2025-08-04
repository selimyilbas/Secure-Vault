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
    console.log('Login button clicked');
    console.log('Credentials:', this.credentials);
    
    if (this.credentials.tckn && this.credentials.password) {
      this.loading = true;
      console.log('Calling auth service...');
      
      this.authService.login(this.credentials.tckn, this.credentials.password)
        .subscribe({
          next: (success) => {
            console.log('Login response:', success);
            if (success) {
              console.log('Login successful, navigating to dashboard');
              this.router.navigate(['/dashboard']);
            } else {
              console.log('Login failed');
              this.loading = false;
            }
          },
          error: (error) => {
            console.error('Login error:', error);
            this.loading = false;
          },
          complete: () => {
            console.log('Login complete');
            this.loading = false;
          }
        });
    } else {
      console.log('Missing credentials');
    }
  }

  testLogin() {
    console.log('Test login clicked');
    this.credentials.tckn = '12345678901';
    this.credentials.password = 'Password123!';
    this.onLogin();
  }
}