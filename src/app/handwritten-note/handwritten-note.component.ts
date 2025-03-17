import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-handwritten-note',
  templateUrl: './handwritten-note.component.html',
  imports : [CommonModule],
  styleUrls: ['./handwritten-note.component.css']
})
export class HandwrittenNoteComponent implements OnInit {

  text = `Hey Indhu,\n\nI just wanted to create something special for you. 😊\n
  You always brighten my days and inspire me to be better. 💖\n
  No matter what, I hope this little surprise makes you smile. 😄\n
  Just for you, Indhu. 💖`;

  displayText = '';
  currentIndex = 0;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.currentIndex < this.text.length) {
      this.displayText += this.text[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.typeText(), 80);
    }
  }

  goBack() {
    this.location.back();
  }
}
