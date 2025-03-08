import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    console.log(`Navigating to: ${path}`);
    this.router.navigate([path]);
  }

  ngAfterViewInit() {
    this.createFloatingHearts();
    this.createFloatingBalloons(); // Add balloons animation
  }

  createFloatingHearts() {
    const container = document.querySelector('.hearts-container');

    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      heart.style.opacity = `${Math.random() * 0.8 + 0.2}`;

      container?.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, 500);
  }

  createFloatingBalloons() {
    const container = document.querySelector('.balloons-container');

    setInterval(() => {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${4 + Math.random() * 3}s`;

      container?.appendChild(balloon);
      setTimeout(() => {
        balloon.remove();
      }, 7000);
    }, 800);
  }
}
