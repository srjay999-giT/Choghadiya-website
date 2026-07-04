import { Component, OnInit } from '@angular/core';
import { ChoghadiyaService } from '../../services/choghadiya.service';

@Component({
  selector: 'app-panchang',
  standalone: true,
  templateUrl: './panchang.component.html',
  styleUrl: './panchang.component.css'
})
export class PanchangComponent implements OnInit {
  panchangData: any; // Using 'any' just for simplicity as a beginner

  constructor(private choghadiyaService: ChoghadiyaService) {}

  ngOnInit() {
    this.panchangData = this.choghadiyaService.getPanchang();
  }
}
