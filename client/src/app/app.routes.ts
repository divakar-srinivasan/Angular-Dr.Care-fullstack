import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login-page/login/login.component';
import { SignupComponent } from './Components/login-page/signup/signup.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { HealthComponent } from './Components/health/health.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { MapsComponent } from './Components/maps/maps.component';


export const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login' , component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'health', component: HealthComponent},
    { path: 'orders', component: OrdersComponent },
    { path: 'maps', component: MapsComponent }
];
