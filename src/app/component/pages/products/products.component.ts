import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        query('img', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ]),
    trigger('cardFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ProductsComponent {
  products = [
    { name: 'Classic Potato Chips', image: 'chips.jpg' },
    { name: 'Ridged Crunch Chips', image: 'chips2.jpeg' },
    { name: 'Tortilla Chips', image: 'chips3.jpg' },
    { name: 'Veggie Chips', image: 'chips4.jpeg' },
    { name: 'Pita Chips', image: 'chips4.jpeg' },
    { name: 'Plantain Chips', image: 'chips5.jpeg' },
    { name: 'Cheese Chips', image: 'chips6.jpeg' },
    { name: 'Multi-Grain Chips', image: 'chips7.jpeg' },
    { name: 'BBQ Potato Chips', image: 'chips8.jpeg' }
  ];
}
