import { CommonModule } from '@angular/common';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-health',
  standalone: true,
  imports: [ HttpClientModule , CommonModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent implements OnInit {
  healthTips!: any[]; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getHealthTips();
  }

  getHealthTips() {
    const apiUrl = 'https://www.healthcare.gov/api/index.json'; 
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.healthTips = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
