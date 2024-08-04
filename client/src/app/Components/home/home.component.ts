import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnlineAppointmentComponent } from './online-appointment/online-appointment.component';
import { ClinicComponent } from './clinic/clinic.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,OnlineAppointmentComponent,ClinicComponent,MobileappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
