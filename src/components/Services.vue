<template>
  <section id="services" class="services-section">
    <div class="services-header animate-fade-in-up">
      <h2>Our App Templates</h2>
      <p>Choose from our curated collection of industry-specific templates, each designed to solve real business challenges.</p>
    </div>
    <section class="templates-grid">
      <div 
        class="flip-card-wrapper animate-scale-in" 
        v-for="(template, index) in templates" 
        :key="index"
        :style="{ 'animation-delay': `${index * 0.1}s` }"
      >
        <div class="flip-card">
          <div class="flip-card-front" :class="template.frontClass">
            <div class="card-content">
              <h3>{{ template.name }}</h3>
              <div class="card-shimmer"></div>
            </div>
          </div>
          <div class="flip-card-back" :class="template.frontClass">
            <div class="flip-card-back-content">
              <h3>{{ template.name }}</h3>
              <p class="template-description">{{ template.description }}</p>
              <ul class="template-features">
                <li v-for="feature in template.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            <button class="cta-button" @click.stop="viewTemplate(template)">
              <span>View Template</span>
              <div class="button-shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="more-services">
      <h2>...and much more!</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      templates: [
        {
          name: 'E-commerce',
          icon: '',
          description: 'Complete online store solution with product catalog, shopping cart, and checkout integration.',
          features: ['Product management', 'Payment processing', 'Order tracking', 'Customer analytics'],
          frontClass: 'ecommerce-bg',
          categoryKey: 'ecommerce'
        },
        {
          name: 'Restaurants & Cafes',
          icon: '🍽️',
          description: 'Menu showcase, reservation system, and location finder for food businesses.',
          features: ['Digital menu', 'Online reservations', 'Order ahead', 'Table management'],
          frontClass: 'restaurant-bg',
          categoryKey: 'restaurant'
        },
        {
          name: 'Musicians & Artists',
          icon: '🎨',
          description: 'Portfolio platform with gallery, booking calendar, and fan engagement tools.',
          features: ['Media portfolio', 'Booking calendar', 'Fan community', 'Merchandise store'],
          frontClass: 'artist-bg',
          categoryKey: 'artist'
        },
        {
          name: 'Service Providers',
          icon: '🔧',
          description: 'Appointment scheduling, service listing, and client management system.',
          features: ['Appointment booking', 'Service catalog', 'Client profiles', 'Payment processing'],
          frontClass: 'service-bg',
          categoryKey: 'service'
        },
        {
          name: 'Real Estate',
          icon: '🏠',
          description: 'Property listings with virtual tours, agent profiles, and inquiry management.',
          features: ['Property listings', 'Virtual tours', 'Agent directory', 'Lead management'],
          frontClass: 'real-estate-bg',
          categoryKey: 'realestate'
        },
        {
          name: 'Fitness & Wellness',
          icon: '💪',
          description: 'Class scheduling, membership management, and workout tracking platform.',
          features: ['Class schedule', 'Membership tiers', 'Trainer profiles', 'Progress tracking'],
          frontClass: 'fitness-bg',
          categoryKey: 'fitness'
        }
      ]
    }
  },
  methods: {
    viewTemplate(template) {
      this.$router.push(`/category/${template.categoryKey}`)
    }
  }
}
</script>

<style scoped>
.services-section {
  padding: 100px 20px;
  background: #000000;
}

.services-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.services-header h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -1px;
}

.services-header p {
  font-size: 18px;
  color: #aaaaaa;
  line-height: 1.8;
}

.more-services {
  text-align: center;
  font-size: 2rem;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Flip card styles */
.flip-card-wrapper {
  perspective: 1000px;
  height: 400px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.flip-card-wrapper:hover {
  transform: translateY(-5px);
}

.flip-card-wrapper:hover .flip-card {
  transform: rotateY(180deg);
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
}

.flip-card-front {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  overflow: hidden;
}

.flip-card-front.ecommerce-bg,
.flip-card-back.ecommerce-bg {
  background-image: url('/1.png');
  background-size: cover;
  background-position: center;
}

.flip-card-front.restaurant-bg,
.flip-card-back.restaurant-bg {
  background-image: url('/2.png');
  background-size: cover;
  background-position: center;
}

.flip-card-front.artist-bg,
.flip-card-back.artist-bg {
  background-image: url('/3.png');
  background-size: cover;
  background-position: center;
}

.flip-card-front.service-bg,
.flip-card-back.service-bg {
  background-image: url('/4.png');
  background-size: cover;
  background-position: center;
}

.flip-card-front.real-estate-bg,
.flip-card-back.real-estate-bg {
  background-image: url('/5.png');
  background-size: cover;
  background-position: center;
}

.flip-card-front.fitness-bg,
.flip-card-back.fitness-bg {
  background-image: url('/6.png');
  background-size: cover;
  background-position: center;
}

/* Dark overlay for image backgrounds */
.flip-card-front.ecommerce-bg::before,
.flip-card-front.restaurant-bg::before,
.flip-card-front.artist-bg::before,
.flip-card-front.service-bg::before,
.flip-card-front.real-estate-bg::before,
.flip-card-front.fitness-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.2),
    rgba(0,0,0,0.75)
  );
  z-index: 0;
}

.flip-card-wrapper:hover .flip-card-front {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
}

.flip-card-icon {
  font-size: 80px;
  opacity: 0.8;
  margin-bottom: 20px;
}

.flip-card-front .card-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.flip-card-front h3 {
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
}

.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 2px solid #000000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transform: rotateY(180deg);
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  backface-visibility: hidden;
}

.flip-card-back::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.750),
    rgba(255, 255, 255, 0.750)
  );
  z-index: -1;
}

.flip-card-back-content h3 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #000000;
}

.template-description {
  font-size: 13px;
  color: #000;
  margin-bottom: 15px;
  line-height: 1.6;
  font-weight: 700;
}

.template-features {
  list-style: none;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 900;
}

.template-features li {
  padding: 6px 0;
  color: #000000;
  padding-left: 18px;
  position: relative;
}

.template-features li:before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #000000;
  font-size: 8px;
}

.cta-button {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 9px 22px;
  border: 2px solid #000000;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  align-self: flex-start;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 4px;
}

.card-shimmer {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  background-size: 200% 200%;
  animation: shimmer 3s ease-in-out infinite;
  border-radius: 12px;
  pointer-events: none;
}

.button-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover .button-shimmer {
  left: 100%;
}

.cta-button:hover {
  background-color: #ffffff;
  color: #000000;
  transform: scale(1.05);
}

@keyframes shimmer {
  0% {
    background-position: -200% -200%;
  }
  100% {
    background-position: 200% 200%;
  }
}

@media (max-width: 768px) {
  .templates-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .services-header h2 {
    font-size: 36px;
  }
  
  /* .flip-card-wrapper {
    height: 350px;
  } */
}
</style>
