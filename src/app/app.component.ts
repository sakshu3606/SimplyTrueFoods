import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChatbotComponent } from './component/pages/chatbot/chatbot.component';
import { MealComponent } from './component/pages/meal/meal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ChatbotComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // fixed from styleUrl to styleUrls
})
export class AppComponent {
  title = 'simplyFoods';
}
