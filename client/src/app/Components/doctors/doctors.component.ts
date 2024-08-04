import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink ,Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [FormsModule,HttpClientModule ,RouterLink],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  fullName: string = "";
  email: string = "";
  phone: string = "";
  selectedDoctor: string = "";
  selectedDate: string = "";
  selectedTime: string = "";
  message: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const newAppointment = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      selectedDoctor: this.selectedDoctor,
      selectedDate: this.selectedDate,
      selectedTime: this.selectedTime,
      message: this.message
    };

    this.http.post<any>('http://localhost:4000/api/appointment', newAppointment)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
  }
}
