import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    ScrollReveal().reveal('.about');
  }
}
