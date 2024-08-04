import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/api/register', newUser)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/home']);
      }, error => {
        console.error(error);
      });
  }
}