<template>
  <section class="brands-section">
    <div class="brands-header animate-fade-in-up">
      <h2>Trusted by Leading Brands</h2>
      <p>Creator Cartel powers apps for some of the world's most innovative companies and growing businesses.</p>
    </div>
    <div class="brands-carousel">
      <div class="brands-track" ref="brandsTrack">
        <div 
          class="brand-logo animate-scale-in" 
          v-for="(brand, index) in duplicatedBrands" 
          :key="index"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          @click="handleBrandClick(brand)"
        >
          <img :src="brand.logo" :alt="brand.name" class="brand-logo-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Brands',
  data() {
    return {
      brands: [
        {
          name: 'FutureRent',
          logo: '/futurerent.png'
        },
        {
          name: 'Ace Radio', 
          logo: '/acelogo.png'
        },
        {
          name: 'Newsroom',
          logo: '/news.png'
        },
        {
          name: 'Motility',
          logo: '/motility.svg'
        },
        {
          name: 'capion',
          logo: '/capion.svg'
        }
      ]
    }
  },
  computed: {
    duplicatedBrands() {
      // Duplicate brands array for seamless looping - need enough copies for smooth animation
      return [...this.brands, ...this.brands, ...this.brands, ...this.brands, ...this.brands]
    }
  },
  mounted() {
    this.startInfiniteScroll()
  },
  methods: {
    handleBrandClick(brand) {
      console.log(`Clicked on ${brand.name}`)
    },
    startInfiniteScroll() {
      const track = this.$refs.brandsTrack
      if (!track) return
      
      let position = 0
      const speed = 1 // pixels per frame
      
      // Wait for DOM to be fully rendered to get accurate measurements
      setTimeout(() => {
        const totalWidth = track.scrollWidth
        const singleSetWidth = totalWidth / 5 // We have 5 copies
        
        const animate = () => {
          position += speed
          
          // Reset when we've scrolled past one complete set
          if (position >= singleSetWidth) {
            position -= singleSetWidth
          }
          
          track.style.transform = `translateX(-${position}px)`
          requestAnimationFrame(animate)
        }
        
        requestAnimationFrame(animate)
      }, 100)
    }
  }
}
</script>

<style scoped>
.brands-section {
  padding: 100px 20px;
  background: #000000;
  border-top: 1px solid #333333;
}

.brands-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.brands-header h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -1px;
}

.brands-header p {
  font-size: 18px;
  color: #aaaaaa;
  line-height: 1.8;
}

.brands-carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.brands-track {
  display: flex;
  gap: 25px;
  will-change: transform;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #1a1a1a; */
  /* border: 1px solid #333333; */
  height: 160px;
  min-width: 200px;
  padding: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.brand-logo-img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  object-fit: contain;
}

.brand-logo:hover {
  background: #2a2a2a;
  border-color: #555555;
  transform: scale(1.05);
}

.brand-logo svg {
  width: 80%;
  height: auto;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.brand-logo:hover svg {
  opacity: 1;
}

@media (max-width: 768px) {
  .brands-header h2 {
    font-size: 36px;
  }
  
  .brands-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
  }
  
  .brand-logo {
    height: 100px;
  }
}
</style>
