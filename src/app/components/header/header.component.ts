import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // These variables will be displayed in our HTML file
  
  title: string = 'Ahmedabad Choghadiya';
  
  // Gets today's date and converts it to a readable string like "Mon Oct 25 2023"
  todayDate: string = new Date().toDateString(); 
}
