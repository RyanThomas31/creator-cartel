<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <div class="particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
    <div class="hero-content animate-fade-in-up">
      <h1 class="animate-slide-in-left">Build Your Empire</h1>
      <p class="animate-slide-in-right">Launch a stunning, fully-functional app in days, not months. Choose from our professionally designed templates.</p>
      <button class="hero-cta animate-scale-in" @click="scrollToTemplates">
        <span>Explore Templates</span>
        <div class="button-glow"></div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollToTemplates() {
      const servicesSection = document.querySelector('.services-section')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    getParticleStyle(index) {
      const size = Math.random() * 4 + 1
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5
      const opacity = Math.random() * 0.5 + 0.1
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity
      }
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  border-bottom: 1px solid #333333;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  animation: float linear infinite;
}

@keyframes float {
  from {
    transform: translateY(100vh) rotate(0deg);
  }
  to {
    transform: translateY(-100px) rotate(360deg);
  }
}

.hero-content h1 {
  font-size: 72px;
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  font-size: 24px;
  color: #cccccc;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.6;
}

.hero-cta {
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  padding: 15px 40px;
  border: 2px solid #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.button-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.hero-cta:hover .button-glow {
  width: 300px;
  height: 300px;
}

.hero-cta:hover {
  background-color: transparent;
  color: #ffffff;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}

.hero-cta span {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 48px;
  }
  
  .hero-content p {
    font-size: 18px;
  }
  
  .hero-cta {
    padding: 12px 30px;
    font-size: 14px;
  }
}
</style>
