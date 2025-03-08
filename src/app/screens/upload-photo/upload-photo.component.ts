import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  imports: [CommonModule],
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  @ViewChild('slideshow') slideshow!: ElementRef;
  @ViewChild('backgroundAudio') backgroundAudio!: ElementRef<HTMLAudioElement>;

  photos = [
    'assets/balloon1.png',
    'assets/photo1.png',
    'assets/balloon3.jpeg',
    'assets/photo2.jpg',
    'assets/balloon1.png',
    'assets/photo3.jpg',
    'assets/balloon3.jpeg',
    'assets/photo4.jpg',
    'assets/balloon1.png',
    'assets/photo5.jpg',
    'assets/balloon1.png',
    'assets/photo6.jpg',
    'assets/balloon3.jpeg',
    'assets/photo7.jpg',

   
    // 'assets/photo1.png',
    // 'assets/photo2.jpg',
    // 'assets/photo3.jpg',
    // 'assets/photo4.jpg',
    // 'assets/photo5.jpg',
    // 'assets/photo6.jpg',
    // 'assets/photo7.jpg',
  ];

  currentIndex = 0;
  isPaused = false;
  interval: any;

  songs = ['assets/song1.mp3', 'assets/song2.mp3', 'assets/song3.mp3']; // List of songs
  currentSong = this.songs[0]; // Default song

  ngOnInit() {
    this.startSlideshow();
    this.createFloatingHearts(); // Start floating hearts
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        this.scrollToImage();
      }
    }, 3000);
  }

  scrollToImage() {
    if (this.slideshow) {
      const slides = this.slideshow.nativeElement.children;
      slides[this.currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }

  toggleSlideshow() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) {
      this.backgroundAudio.nativeElement.play();
      this.startSlideshow();
    } else {
      this.backgroundAudio.nativeElement.pause();
      clearInterval(this.interval);
    }
  }

  changeSong() {
    const currentIndex = this.songs.indexOf(this.currentSong);
    const nextIndex = (currentIndex + 1) % this.songs.length;
    this.currentSong = this.songs[nextIndex];

    // Restart the song
    this.backgroundAudio.nativeElement.load();
    this.backgroundAudio.nativeElement.play();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  goNext() {
    this.router.navigate(['/music-surprise']);
  }

  createFloatingHearts() {
    const container = this.el.nativeElement.querySelector('.hearts-container');
  
    setInterval(() => {
      const heart = this.renderer.createElement('div');
      this.renderer.addClass(heart, 'heart');
      this.renderer.setProperty(heart, 'innerHTML', '❤️');
  
      // Random position & animation duration (Faster hearts)
      this.renderer.setStyle(heart, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(heart, 'animationDuration', `${2 + Math.random()}s`); // Faster (2s to 3s)
  
      // Append heart to the container
      this.renderer.appendChild(container, heart);
  
      // Remove heart after animation
      setTimeout(() => {
        this.renderer.removeChild(container, heart);
      }, 3000); // Remove quicker
    }, 400); // Faster appearance (Every 400ms)
  }
}
