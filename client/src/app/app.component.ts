  import { HttpClientModule } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterLink, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
  import { FooterComponent } from './footer/footer.component';



  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet ,FormsModule,HttpClientModule  ,RouterLink,HeaderComponent,FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
  }
