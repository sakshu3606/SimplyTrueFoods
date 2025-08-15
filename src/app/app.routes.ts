import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { CommunityComponent } from './component/pages/community/community.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { ChatbotComponent } from './component/pages/chatbot/chatbot.component';
import { MealComponent } from './component/pages/meal/meal.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Simply True Food - Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - Simply True Food'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Our Menu - Simply True Food'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us - Simply True Food'
  },
  {
    path: 'community',
    component: CommunityComponent,
    title: 'Community Us - Simply True Food'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog Us - Simply True Food'
  },
  {
    path: 'chatbot',
    component: ChatbotComponent,
    title: 'Chat with us - Simply True Food'
  },
  {
    path: 'meal',
    component: MealComponent,
    title: 'Meal of the day - Simply True Food'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
