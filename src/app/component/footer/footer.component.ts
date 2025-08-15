import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface FooterLink {
  label: string;
  route: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsletterEmail = '';

  quickLinks: FooterLink[] = [
    { label: 'Home', route: '/home' },
    { label: 'Our Story', route: '/about' },
    { label: 'Products', route: '/products' },
    { label: 'Recipes', route: '/recipes' },
    { label: 'Blog', route: '/blog' }
  ];

  snackCategories: FooterLink[] = [
    { label: 'Potato Chips', route: '/products/potato-chips' },
    { label: 'Veggie Crisps', route: '/products/veggie-crisps' },
    { label: 'Nut Clusters', route: '/products/nut-clusters' },
    { label: 'Granola Bites', route: '/products/granola-bites' },
    { label: 'All Products', route: '/products' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com/simplytrue', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', url: 'https://instagram.com/simplytrue', icon: 'fab fa-instagram' },
    { name: 'Twitter', url: 'https://twitter.com/simplytrue', icon: 'fab fa-twitter' },
    { name: 'YouTube', url: 'https://youtube.com/simplytrue', icon: 'fab fa-youtube' }
  ];

  contactInfo: ContactInfo = {
    address: '123 Farm Road, Organic Valley, CA 90210',
    phone: '(800) 555-1234',
    email: 'hello@simplytrue.com'
  };

  legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Terms of Service', route: '/terms-of-service' },
    { label: 'Shipping Policy', route: '/shipping-policy' }
  ];

  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization logic
  }

  navigateTo(route: string): void {
    try {
      this.router.navigate([route]);
      this.scrollToTop();
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  onNewsletterSubmit(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (this.newsletterEmail && this.isValidEmail(this.newsletterEmail)) {
      // Handle newsletter subscription logic here
      console.log('Newsletter subscription for:', this.newsletterEmail);
      
      // Here you would typically make an API call to your backend
      this.subscribeToNewsletter(this.newsletterEmail);
      
      // Reset form
      this.newsletterEmail = '';
      
      // Show success message
      this.showSuccessMessage('Thank you for subscribing to our newsletter!');
    } else {
      this.showErrorMessage('Please enter a valid email address.');
    }
  }

  private subscribeToNewsletter(email: string): void {
    // This would typically be an HTTP call to your backend
    // Example: this.newsletterService.subscribe(email).subscribe(...)
    console.log(`Subscribing ${email} to newsletter...`);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private showSuccessMessage(message: string): void {
    // In a real application, you'd use a proper notification service
    // For now, using alert as fallback
    alert(message);
    
    // Alternative: You could use Angular Material Snackbar or similar
    // this.snackBar.open(message, 'Close', { duration: 3000 });
  }

  private showErrorMessage(message: string): void {
    // In a real application, you'd use a proper notification service
    alert(message);
  }
}  