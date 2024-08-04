import { Component } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 11.1271, lng: 78.6569 },
    zoom: 8,
  };  
}