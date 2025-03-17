import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-message',
  templateUrl: './final-message.component.html',
  imports: [CommonModule], // ✅ Import this module
  styleUrls: ['./final-message.component.css']
})
export class FinalMessageComponent implements OnInit {
  constructor(private router: Router) {}
  hearts: any[] = [];

  ngOnInit() {
    this.generateHearts();
  }

  generateHearts() {
    this.hearts = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 3 + 2}s`
    }));
  }

  sendTreat() {
    alert("GPay Number: 6379449497\nSend ₹100 now and make my day! 😂💸");
  }

 
  goHome() {
    this.router.navigate(['/home']);
  }
  aboutYou() {
    this.router.navigate(['/wishes']);
  }
}
