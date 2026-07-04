import { Component } from '@angular/core';

// We import all our page sections (components) here.
// These will be created in the next steps.
// For now, they might show an error until we create them, which is normal.
import { HeaderComponent } from './components/header/header.component';
import { CurrentChoghadiyaComponent } from './components/current-choghadiya/current-choghadiya.component';
import { PanchangComponent } from './components/panchang/panchang.component';
import { ChoghadiyaListComponent } from './components/choghadiya-list/choghadiya-list.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true, // We are using standalone components (No ngModule)
  imports: [
    HeaderComponent,
    CurrentChoghadiyaComponent,
    PanchangComponent,
    ChoghadiyaListComponent,
    AboutComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // This is our main App component.
  // It simply loads all the other sections (components) of our page.
}
