import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for *ngFor
import { ChoghadiyaService } from '../../services/choghadiya.service';
import { ChoghadiyaSlot } from '../../models/choghadiya.model';

@Component({
  selector: 'app-choghadiya-list',
  standalone: true,
  imports: [CommonModule], // We need CommonModule to use *ngFor in the HTML
  templateUrl: './choghadiya-list.component.html',
  styleUrl: './choghadiya-list.component.css'
})
export class ChoghadiyaListComponent implements OnInit {
  // Empty arrays to hold our slots
  daySlots: ChoghadiyaSlot[] = [];
  nightSlots: ChoghadiyaSlot[] = [];

  constructor(private choghadiyaService: ChoghadiyaService) {}

  ngOnInit() {
    // Fill our arrays with data from the service when the component loads
    this.daySlots = this.choghadiyaService.getDaySlots();
    this.nightSlots = this.choghadiyaService.getNightSlots();
  }
}
