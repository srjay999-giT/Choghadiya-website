// This is our Model. 
// It defines the shape of our data so TypeScript can help us catch mistakes.
// It acts as a blueprint for a Choghadiya time slot.

export interface ChoghadiyaSlot {
  // Name of the Choghadiya (e.g., Amrit, Shubh, Labh)
  name: string;
  
  // When this slot starts (e.g., "06:30 AM")
  startTime: string;
  
  // When this slot ends (e.g., "08:00 AM")
  endTime: string;
  
  // What it means (e.g., "Good", "Bad", "Neutral")
  meaning: string;
}
