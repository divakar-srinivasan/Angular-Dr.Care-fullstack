import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive , HttpClientModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/api/login', userData)
      .subscribe(
        response => {
          console.log(response);
          // Redirect to dashboard or perform any other action upon successful login
        },
        error => {
          console.error(error);
        }
      );
  }

}
