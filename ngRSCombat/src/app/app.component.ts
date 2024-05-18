import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RSCombatComponent } from './components/rscombat/rscombat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RSCombatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRSCombat';
}
