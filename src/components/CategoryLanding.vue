<template>
  <div class="category-landing">
    <Header />
    <main class="landing-main">
      <div class="landing-hero" :class="categoryClass">
        <div class="hero-content">
          <h1>{{ categoryTitle }}</h1>
          <p class="hero-description">{{ categoryDescription }}</p>
          <button class="back-button" @click="goBack">
            ← Back to Templates
          </button>
        </div>
      </div>
      
      <div class="landing-details">
        <div class="details-container">
          <section class="features-section">
            <h2>Key Features</h2>
            <div class="features-grid">
              <div class="feature-card" v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">{{ feature.icon }}</div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </section>
          
          <section class="benefits-section">
            <h2>Why Choose This Template?</h2>
            <div class="benefits-list">
              <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
                <span class="benefit-check">✓</span>
                <p>{{ benefit }}</p>
              </div>
            </div>
          </section>
          
          <section class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Contact us to customize this template for your business.</p>
            <button class="contact-button" @click="scrollToContact">
              Get in Touch
            </button>
          </section>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './Header.vue'
import ContactForm from './ContactForm.vue'
import Footer from './Footer.vue'

export default {
  name: 'CategoryLanding',
  components: {
    Header,
    ContactForm,
    Footer
  },
  data() {
    return {
      categories: {
        'ecommerce': {
          title: 'E-commerce',
          description: 'Complete online store solution with product catalog, shopping cart, and checkout integration.',
          class: 'ecommerce-landing',
          features: [
            { icon: '🛒', title: 'Product Management', description: 'Easy-to-use product catalog with inventory tracking, variants, and bulk editing capabilities.' },
            { icon: '💳', title: 'Payment Processing', description: 'Integrated payment gateways supporting multiple payment methods and currencies.' },
            { icon: '📦', title: 'Order Tracking', description: 'Real-time order status updates and shipping tracking for customers.' },
            { icon: '📊', title: 'Customer Analytics', description: 'Comprehensive dashboard with sales reports, customer insights, and performance metrics.' }
          ],
          benefits: [
            'Mobile-responsive design for shopping on any device',
            'SEO-optimized product pages for better visibility',
            'Integrated email marketing and abandoned cart recovery',
            'Multi-currency and multi-language support',
            'Secure checkout with SSL encryption',
            'Easy integration with shipping providers'
          ]
        },
        'restaurant': {
          title: 'Restaurants & Cafes',
          description: 'Menu showcase, reservation system, and location finder for food businesses.',
          class: 'restaurant-landing',
          features: [
            { icon: '📋', title: 'Digital Menu', description: 'Beautiful, interactive menu with photos, descriptions, and dietary information.' },
            { icon: '📅', title: 'Online Reservations', description: 'Real-time booking system with table management and availability calendar.' },
            { icon: '🚀', title: 'Order Ahead', description: 'Allow customers to order for pickup or delivery with estimated wait times.' },
            { icon: '🪑', title: 'Table Management', description: 'Efficient table layout editor with seating capacity and section organization.' }
          ],
          benefits: [
            'Reduce phone calls with online ordering',
            'Minimize no-shows with reservation confirmations',
            'Showcase your menu with appetizing photos',
            'Accept payments online for advance orders',
            'Integrate with POS systems',
            'Build customer loyalty with reviews and ratings'
          ]
        },
        'artist': {
          title: 'Musicians & Artists',
          description: 'Portfolio platform with gallery, booking calendar, and fan engagement tools.',
          class: 'artist-landing',
          features: [
            { icon: '🎨', title: 'Media Portfolio', description: 'Showcase your work with high-quality galleries, videos, and audio players.' },
            { icon: '📆', title: 'Booking Calendar', description: 'Manage gigs, exhibitions, and sessions with availability scheduling.' },
            { icon: '👥', title: 'Fan Community', description: 'Build your audience with newsletters, fan clubs, and exclusive content.' },
            { icon: '🛍️', title: 'Merchandise Store', description: 'Sell merchandise, digital downloads, and exclusive items directly to fans.' }
          ],
          benefits: [
            'Professional portfolio that impresses clients',
            'Streamlined booking and inquiry management',
            'Direct connection with your fanbase',
            'Monetize your content and merchandise',
            'Social media integration for wider reach',
            'Customizable to match your artistic brand'
          ]
        },
        'service': {
          title: 'Service Providers',
          description: 'Appointment scheduling, service listing, and client management system.',
          class: 'service-landing',
          features: [
            { icon: '📅', title: 'Appointment Booking', description: 'Easy online scheduling with calendar sync and automated reminders.' },
            { icon: '📝', title: 'Service Catalog', description: 'Detailed service listings with pricing, duration, and descriptions.' },
            { icon: '👤', title: 'Client Profiles', description: 'Comprehensive client database with history, notes, and preferences.' },
            { icon: '💰', title: 'Payment Processing', description: 'Accept payments online with invoicing and recurring billing options.' }
          ],
          benefits: [
            'Reduce no-shows with automated reminders',
            'Streamline your booking process 24/7',
            'Build lasting client relationships',
            'Get paid faster with online payments',
            'Manage your schedule efficiently',
            'Professional image for your business'
          ]
        },
        'realestate': {
          title: 'Real Estate',
          description: 'Property listings with virtual tours, agent profiles, and inquiry management.',
          class: 'realestate-landing',
          features: [
            { icon: '🏠', title: 'Property Listings', description: 'Comprehensive property database with photos, videos, and detailed information.' },
            { icon: '🎥', title: 'Virtual Tours', description: 'Immersive 3D tours and video walkthroughs for remote property viewing.' },
            { icon: '👔', title: 'Agent Directory', description: 'Professional agent profiles with expertise areas and client testimonials.' },
            { icon: '📊', title: 'Lead Management', description: 'Track inquiries, schedule viewings, and manage client relationships.' }
          ],
          benefits: [
            'Showcase properties in their best light',
            'Reach buyers 24/7 with online listings',
            'Qualify leads with inquiry forms',
            'Build trust with agent profiles and reviews',
            'Stand out with virtual tour technology',
            'Streamline your sales process'
          ]
        },
        'fitness': {
          title: 'Fitness & Wellness',
          description: 'Class scheduling, membership management, and workout tracking platform.',
          class: 'fitness-landing',
          features: [
            { icon: '📅', title: 'Class Schedule', description: 'Real-time class calendar with booking, capacity limits, and waitlists.' },
            { icon: '👥', title: 'Membership Tiers', description: 'Flexible membership options with different access levels and pricing.' },
            { icon: '🏋️', title: 'Trainer Profiles', description: 'Showcase your trainers with certifications, specialties, and availability.' },
            { icon: '📈', title: 'Progress Tracking', description: 'Client progress monitoring with workout logs, goals, and achievements.' }
          ],
          benefits: [
            'Fill classes with easy online booking',
            'Reduce administrative work with automation',
            'Retain members with progress tracking',
            'Showcase your expert team',
            'Offer flexible membership options',
            'Build a community around your brand'
          ]
        }
      }
    }
  },
  computed: {
    categoryKey() {
      return this.$route.params.category
    },
    categoryData() {
      return this.categories[this.categoryKey] || this.categories['ecommerce']
    },
    categoryTitle() {
      return this.categoryData.title
    },
    categoryDescription() {
      return this.categoryData.description
    },
    categoryClass() {
      return this.categoryData.class
    },
    features() {
      return this.categoryData.features
    },
    benefits() {
      return this.categoryData.benefits
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    scrollToContact() {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.category-landing {
  width: 100%;
  min-height: 100vh;
}

.landing-main {
  width: 100%;
}

.landing-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px;
  background-size: cover;
  background-position: center;
}

.landing-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9));
  z-index: 1;
}

.landing-hero.ecommerce-landing {
  background-image: url('/1.png');
}

.landing-hero.restaurant-landing {
  background-image: url('/2.png');
}

.landing-hero.artist-landing {
  background-image: url('/3.png');
}

.landing-hero.service-landing {
  background-image: url('/4.png');
}

.landing-hero.realestate-landing {
  background-image: url('/5.png');
}

.landing-hero.fitness-landing {
  background-image: url('/6.png');
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 64px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

.hero-description {
  font-size: 20px;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.6;
}

.back-button {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 30px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

.back-button:hover {
  background-color: #ffffff;
  color: #000000;
  transform: translateY(-2px);
}

.landing-details {
  padding: 100px 20px;
  background: #000000;
}

.details-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-section,
.benefits-section,
.cta-section {
  margin-bottom: 100px;
}

.features-section h2,
.benefits-section h2,
.cta-section h2 {
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 40px 30px;
  border-radius: 12px;
  border: 1px solid #333333;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #ffffff;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
}

.feature-card p {
  font-size: 14px;
  color: #aaaaaa;
  line-height: 1.6;
}

.benefits-list {
  max-width: 800px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #333333;
}

.benefit-item:last-child {
  border-bottom: none;
}

.benefit-check {
  font-size: 24px;
  color: #00ff88;
  margin-right: 20px;
  font-weight: bold;
}

.benefit-item p {
  font-size: 16px;
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  text-align: center;
  padding: 60px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 12px;
  border: 1px solid #333333;
}

.cta-section p {
  font-size: 18px;
  color: #aaaaaa;
  margin-bottom: 30px;
}

.contact-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

.contact-button:hover {
  background-color: #000000;
  color: #ffffff;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 42px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .features-section h2,
  .benefits-section h2,
  .cta-section h2 {
    font-size: 32px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .landing-hero {
    min-height: 50vh;
  }
}
</style>
