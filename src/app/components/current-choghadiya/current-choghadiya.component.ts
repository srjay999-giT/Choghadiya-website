import { Component, OnInit } from '@angular/core';
import { ChoghadiyaService } from '../../services/choghadiya.service';
import { ChoghadiyaSlot } from '../../models/choghadiya.model';

@Component({
  selector: 'app-current-choghadiya',
  standalone: true,
  templateUrl: './current-choghadiya.component.html',
  styleUrl: './current-choghadiya.component.css'
})
export class CurrentChoghadiyaComponent implements OnInit {
  // This variable will hold the data for the current choghadiya
  currentSlot!: ChoghadiyaSlot;

  // We bring in our service to get the data
  constructor(private choghadiyaService: ChoghadiyaService) {}

  ngOnInit() {
    // When the component loads, we grab the current choghadiya from the service
    this.currentSlot = this.choghadiyaService.getCurrentChoghadiya();
  }
}
