import { Injectable } from '@angular/core';
import { ChoghadiyaSlot } from '../models/choghadiya.model';

@Injectable({
  providedIn: 'root' // This makes the service available everywhere in our app
})
export class ChoghadiyaService {

  // We are using hardcoded data since we don't have a backend database.
  // These are standard example slots for a typical day.

  private daySlots: ChoghadiyaSlot[] = [
    { name: 'Udveg', startTime: '06:30 AM', endTime: '08:00 AM', meaning: 'Bad' },
    { name: 'Chal', startTime: '08:00 AM', endTime: '09:30 AM', meaning: 'Neutral' },
    { name: 'Labh', startTime: '09:30 AM', endTime: '11:00 AM', meaning: 'Good' },
    { name: 'Amrit', startTime: '11:00 AM', endTime: '12:30 PM', meaning: 'Good' },
    { name: 'Kaal', startTime: '12:30 PM', endTime: '02:00 PM', meaning: 'Bad' },
    { name: 'Shubh', startTime: '02:00 PM', endTime: '03:30 PM', meaning: 'Good' },
    { name: 'Roga', startTime: '03:30 PM', endTime: '05:00 PM', meaning: 'Bad' },
    { name: 'Udveg', startTime: '05:00 PM', endTime: '06:30 PM', meaning: 'Bad' }
  ];

  private nightSlots: ChoghadiyaSlot[] = [
    { name: 'Shubh', startTime: '06:30 PM', endTime: '08:00 PM', meaning: 'Good' },
    { name: 'Amrit', startTime: '08:00 PM', endTime: '09:30 PM', meaning: 'Good' },
    { name: 'Chal', startTime: '09:30 PM', endTime: '11:00 PM', meaning: 'Neutral' },
    { name: 'Roga', startTime: '11:00 PM', endTime: '12:30 AM', meaning: 'Bad' },
    { name: 'Kaal', startTime: '12:30 AM', endTime: '02:00 AM', meaning: 'Bad' },
    { name: 'Labh', startTime: '02:00 AM', endTime: '03:30 AM', meaning: 'Good' },
    { name: 'Udveg', startTime: '03:30 AM', endTime: '05:00 AM', meaning: 'Bad' },
    { name: 'Shubh', startTime: '05:00 AM', endTime: '06:30 AM', meaning: 'Good' }
  ];

  constructor() { }

  // Simple function to get day data
  getDaySlots(): ChoghadiyaSlot[] {
    return this.daySlots;
  }

  // Simple function to get night data
  getNightSlots(): ChoghadiyaSlot[] {
    return this.nightSlots;
  }

  // Return a hardcoded "current" slot for our UI
  getCurrentChoghadiya(): ChoghadiyaSlot {
    // In a real app we'd calculate this based on the real clock, 
    // but we are keeping it super simple here!
    return this.daySlots[3]; // Returns "Amrit" (11:00 AM - 12:30 PM)
  }

  // Return some fake Panchang (Hindu Calendar) data
  getPanchang() {
    return {
      tithi: 'Pratipada',
      nakshatra: 'Ashwini',
      yoga: 'Vishkumbha',
      karana: 'Bava',
      sunrise: '06:30 AM',
      sunset: '06:30 PM'
    };
  }
}
