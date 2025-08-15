# SimplyTrueFoods 🥗

**"Crunchy & Delicious - Farm-Fresh Snacks for Every Occasion"**

A modern, responsive web application for a healthy snack startup targeting young professionals who want quick, affordable, and tasty meals. SimplyTrueFoods specializes in premium organic snacks crafted from farm-fresh ingredients with authentic taste and nutritional value.

## 🎯 Project Overview

SimplyTrueFoods is designed to showcase a complete snack brand experience, from farm to table. The website emphasizes organic farming practices, sustainable production, and wholesome snack varieties that cater to health-conscious consumers seeking quality nutrition.

### Brand Identity
- **Mission**: Crafting wholesome snacks from farm to table with integrity and flavor
- **Focus**: 100% organic, locally sourced, farm-fresh ingredients
- **Values**: Traditional farming methods with innovative cooking techniques
- **Story**: Family-owned operation since 2015, partnering with 12+ local farms

### Target Audience
- Health-conscious young professionals
- Organic food enthusiasts
- People seeking premium, authentic snack experiences
- Consumers interested in sustainable farming practices

## 🚀 Live Demo

- **Repository**: https://github.com/sakshu3606/SimplyTrueFoods

## 🛠️ Tech Stack

- **Framework**: Angular 19.2.3
- **Language**: TypeScript, HTML5, CSS3
- **Styling**: Bootstrap
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Pages
- **Version Control**: Git

## ✨ Unique Features

### 1. "Meal of the Day" Feature
A dedicated showcase system highlighting daily featured meals with detailed descriptions and nutritional information.
- **Current Feature**: "Grilled Veggie Delight" - Freshly grilled organic vegetables with signature herb dip
- **Dynamic Content**: Updates daily with new featured meals
- **Engagement**: Perfect for healthy, filling snack recommendations

### 2. Comprehensive Product Catalog System
An organized product showcase featuring multiple snack categories with visual product cards.
- **Product Range**: 16+ varieties including Classic Potato Chips, Ridged Crunch Chips, Tortilla Chips, Pita Chips, Plantain Chips, and Cheese Crisps
- **Flavor Profiles**: Sea Salt, BBQ, Sour Cream, Spicy Jalapeño, Truffle, Vinegar variations
- **Visual Organization**: Grid-based layout with high-quality product imagery
- **Category Navigation**: "Farm to Table Collection" and premium snack varieties

### 3. Interactive Blog System - "FarmStories"
A content-rich blog platform showcasing the journey from sustainable farming to flavor innovation.
- **Featured Content**: "From Soil to Snack: Our Potato Journey", "Zero-Waste Snack Production", "Meet the Farmers: The Rodriguez Family"
- **Search Functionality**: Article search with filtering capabilities
- **Educational Focus**: Farm-to-table process transparency and sustainable practices

## 🎨 Design Philosophy

### Color Palette
- **Primary Green**: Fresh, vibrant green (#4CAF50) - Represents health, nature, and organic farming
- **Accent Orange**: Warm, appetizing orange (#FF9800) - Conveys energy, appetite, and premium quality
- **Supporting White**: Clean white backgrounds for premium, minimalist aesthetic
- **Text Colors**: Dark gray for readability and professional appearance

### Typography & Design Elements
- **Headers**: Bold, modern sans-serif fonts for impact and readability
- **Body Text**: Clean, accessible typography optimized for web reading
- **Brand Logo**: Distinctive "Simply True" with leaf icon emphasizing organic nature
- **Visual Hierarchy**: Clear distinction between headings, subheadings, and body content

### Layout Strategy
- **Hero Section**: Large, appetizing food imagery with overlay text and call-to-action buttons
- **Card-Based Design**: Consistent card layouts for products, blog posts, and content sections  
- **Navigation**: Clean, horizontal navigation with clear page hierarchy (Home, About, Products, Blog, Community, Contact)
- **Footer**: Comprehensive with quick links, product categories, and contact information
- **Responsive Grid**: Flexible layouts adapting from single-column mobile to multi-column desktop

## 📱 Responsive Design

The website is fully responsive across all device types:

- **Mobile** (320px - 768px): Single column layout, touch-friendly interactions
- **Tablet** (768px - 1024px): Two-column layout, optimized for touch
- **Desktop** (1024px+): Multi-column layout, hover effects, advanced features

## 🏗️ Project Structure & Pages

### Page Architecture
```
src/
├── app/
│   ├── components/
│   │   ├── header/               # Navigation with logo and menu
│   │   ├── hero/                 # Homepage hero with food imagery
│   │   ├── product-catalog/      # Product showcase grid
│   │   ├── meal-of-day/         # Daily meal feature component
│   │   ├── blog/                # FarmStories blog system
│   │   ├── community/           # Community hub (work in progress)
│   │   ├── contact/             # Contact form and information
│   │   └── footer/              # Comprehensive site footer
│   ├── services/
│   │   ├── product.service.ts   # Product data management
│   │   ├── blog.service.ts      # Blog content service
│   │   └── meal.service.ts      # Meal of the day service
│   ├── models/
│   │   ├── product.model.ts     # Product data structure
│   │   └── blog-post.model.ts   # Blog post data model
│   └── pages/
│       ├── home/                # Main landing page
│       ├── about/               # "Snacks with a Story" page
│       ├── products/            # "Discover Our Premium Snacks"
│       ├── blog/                # "FarmStories" content hub
│       ├── community/           # Community features (beta)
│       ├── contact/             # Contact and location info
│       └── meal/                # Meal of the Day feature page
```

### Website Structure
- **Homepage**: Hero section with "Farm-Fresh Snacks for Every Occasion", product highlights, and premium quality messaging
- **About Page**: "Snacks with a Story" - Brand history, farming practices, and company values
- **Products Page**: "Discover Our Premium Snacks" - Complete product catalog with 16+ varieties
- **Blog**: "FarmStories" - Educational content about farming, production, and sustainability
- **Community**: "Our Community Hub" - Coming soon feature for user engagement
- **Contact**: "Get in Touch" - Contact form, location (123 Farm Road, Organic Valley, CA), and communication options
- **Meal Feature**: Dedicated "Meal of the Day" showcase page

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.2.3)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sakshu3606/SimplyTrueFoods.git
   cd SimplyTrueFoods
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

### Key Product Categories
- **Potato Chips**: Classic, Sea Salt varieties with organic, non-GMO potatoes
- **Specialty Chips**: Ridged Crunch, Pita, Plantain, and artisanal varieties
- **Cheese Crisps**: Baked cheese snacks for low-carb enthusiasts
- **Tortilla Chips**: Bold spice-balanced options with satisfying crunch
- **Premium Flavors**: BBQ, Sour Cream, Spicy Jalapeño, Truffle, and Vinegar varieties

## 🎯 Brand Alignment & Business Goals

### How the website addresses SimplyTrueFoods' objectives:

1. **Premium Quality Focus**: High-quality food photography and detailed product descriptions emphasize the premium nature of organic snacks
2. **Farm-to-Table Transparency**: "Snacks with a Story" approach showcases the complete journey from organic farming to final product
3. **Health-Conscious Appeal**: Emphasis on 100% organic ingredients, traditional farming methods, and nutritional benefits
4. **Professional Target Market**: Clean, modern design aesthetic that appeals to discerning consumers seeking quality food products
5. **Community Building**: Blog content and community features foster engagement with health and sustainability-minded customers
6. **Brand Trust**: Family-owned story since 2015, partnership with 12+ local farms, and small-batch production messaging
7. **Product Variety**: 16+ snack varieties catering to different taste preferences and dietary needs

### Unique Value Propositions
- **Authenticity**: "Discover the authentic taste of nature with our handcrafted chips"
- **Sustainability**: Zero-waste production processes and eco-friendly farming partnerships  
- **Quality**: Small-batch production for quality control and premium ingredients
- **Transparency**: Complete supply chain visibility from soil to shelf

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

### Manual Testing Checklist
- [ ] Mobile responsiveness on various screen sizes
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Interactive features functionality
- [ ] Form validations
- [ ] Loading states and error handling

## 🚀 Deployment

The website is deployed using GitHub Pages:

1. **Build for production**
   ```bash
   ng build --prod --base-href "/SimplyTrueFoods/"
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npx angular-cli-ghpages --dir=dist/simply-true-foods
   ```

## 🚀 Future Enhancements

### Planned Features
- [ ] E-commerce integration for direct online ordering
- [ ] User accounts and personalized recommendations
- [ ] Interactive farm location mapping
- [ ] Nutritional information calculator for snack combinations
- [ ] Subscription box service for regular deliveries
- [ ] Customer review and rating system
- [ ] Seasonal product launches and limited editions
- [ ] Loyalty program for frequent customers
- [ ] Mobile app development for iOS and Android
- [ ] Integration with health tracking apps

### Community Features (In Development)
- Recipe sharing platform using SimplyTrue snacks
- User-generated content showcasing snack experiences  
- Farmer spotlight interviews and behind-the-scenes content
- Sustainability challenges and environmental impact tracking

## 📋 Performance Metrics

- **Lighthouse Score**: [Add your scores]
  - Performance: 75/100
  - Accessibility: 80/100
  - Best Practices: 85/100
  - SEO: 88/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Developer

**[Your Name]**
- GitHub: [@sakshu3606](https://github.com/sakshu3606)
- LeetCode: https://leetcode.com/u/s_parate/
- LinkedIn: https://www.linkedin.com/in/sakshi-parate-b78330255/
- Email: sakshiparate305@gmail.com

## 🙏 Acknowledgments

- Angular team for the excellent framework

## 📞 Contact Information

**Business Details:**
- **Address**: 123 Farm Road, Organic Valley, CA 90210
- **Phone**: +1 (800) 555-1234
- **Email**: hello@simplytrue.com

**Quick Links Navigation:**
Home | Our Story | Products | Recipes
Product Categories: Potato Chips | Veggie Crisps | Nut Clusters | Granola Bites

**Quick Links Navigation:**
- Home | Our Story | Products | Recipes
- Product Categories: Potato Chips | Veggie Crisps | Nut Clusters | Granola Bites
