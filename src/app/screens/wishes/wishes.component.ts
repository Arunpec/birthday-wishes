import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonHover', [
      state('hover', style({ transform: 'scale(1.05)' })),
      transition('* => hover', animate('200ms ease-in')),
      transition('hover => *', animate('200ms ease-out'))
    ])
  ]
})
export class WishesComponent implements OnInit {
  wishes: string[] = [
    'May all your dreams come true! 🌟',
    'Have a wonderful day ahead! ☀️',
    'Wishing you endless happiness and success! 🏆',
    'May you achieve everything you wish for! 🎯',
    'Stay blessed and keep shining! ✨'
  ];

  compliments: string[] = [
    'Indhu, your presence alone makes everything better. 💖',
    'Indhu, you have an extraordinary way of making people feel valued. 🌼',
    'Indhu, your kindness is a gift everyone benefits from. 🌈',
    'Indhu, your ideas have the power to change the world. 🌎',
    'Indhu, you are a masterpiece of positivity and grace. 🎨'
  ];

  currentMessage: string = '';
  showMessage = false;
  flowers: any[] = [];

  ngOnInit() {
    this.generateFlowers();
  }

  generateWish() {
    const randomIndex = Math.floor(Math.random() * this.wishes.length);
    this.currentMessage = this.wishes[randomIndex];
    this.showMessage = false;
    setTimeout(() => this.showMessage = true, 0);
  }

  generateCompliment() {
    const randomIndex = Math.floor(Math.random() * this.compliments.length);
    this.currentMessage = this.compliments[randomIndex];
    this.showMessage = false;
    setTimeout(() => this.showMessage = true, 0);
  }

  generateFlowers() {
    const numFlowers = 20; // Number of flowers floating
    for (let i = 0; i < numFlowers; i++) {
      this.flowers.push({
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`
      });
    }
  }
  goBack() {
    window.history.back();
  }
  
}
