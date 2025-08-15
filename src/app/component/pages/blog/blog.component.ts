import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        query('.story-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class BlogComponent {
  searchTerm = '';
  selectedCategory = 'All Posts';

  categories = [
    'All Posts',
    'Production',
    'Recipes',
    'Sustainability',
    'Company News',
    'Farmers Spotlight'
  ];

  stories = [
    {
      title: 'From Soil to Snack: Our Potato Journey',
      image: 'blog1.jpeg',
      category: 'Production',
      excerpt: 'Follow the 60-day journey of our organic potatoes from planting to packaging in small batches.'
    },
    {
      title: 'Zero-Waste Snack Production',
      image: 'blog2.jpeg',
      category: 'Sustainability',
      excerpt: 'How we achieve 98% waste diversion in our manufacturing process through innovative recycling.'
    },
    {
      title: 'Meet the Farmers: The Rodriguez Family',
      image: 'blog3.jpeg',
      category: 'Farmers Spotlight',
      excerpt: 'Three generations of sustainable farming in Idahos Snake River Valley.'
    },
    {
      title: 'Spicy Jalapeño Recipe Development',
      image: 'blog4.jpeg',
      category: 'Recipes',
      excerpt: 'Behind-the-scenes of creating our award-winning spicy flavor profile.'
    },
    {
      title: 'Why We Don’t Use Palm Oil',
      image: 'blog5.jpeg',
      category: 'Sustainability',
      excerpt: 'Our commitment to rainforest-safe ingredients in all products.'
    },
    {
      title: 'New Packaging Innovations',
      image: 'blog6.jpeg',
      category: 'Company News',
      excerpt: 'Introducing our 100% compostable bags that maintain freshness.'
    }
  ];

  get filteredStories() {
    return this.stories.filter(story =>
      (this.selectedCategory === 'All Posts' || story.category === this.selectedCategory) &&
      story.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
