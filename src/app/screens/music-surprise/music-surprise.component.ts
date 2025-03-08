import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-surprise',
  templateUrl: './music-surprise.component.html',
  imports: [CommonModule], // ✅ Add CommonModule here
  styleUrls: ['./music-surprise.component.css']
})
export class MusicSurpriseComponent {
  constructor(private router: Router) {}
  balloons = [
    { left: '10%' },
    { left: '30%' },
    { left: '50%' },
    { left: '70%' },
    { left: '90%' }
  ];

  fireworks = [
    { left: '20%', top: '10%' },
    { left: '70%', top: '30%' },
    { left: '40%', top: '50%' }
  ];

  goBack() {
    window.history.back();
  }
  goNext() {
    this.router.navigate(['/final-message']);
}
}
