<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-content">
      <button class="menu-btn" aria-label="Open navigation menu" type="button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="/"><h1 class="logo">Creator Cartel</h1></a>
      <!-- <p class="tagline">Premium App Templates for Every Business</p> -->
    </div>
  </header>

  <Teleport to="body">
    <div class="menu-overlay" :class="{ open: isMenuOpen }" @click.self="closeMenu">
      <div class="menu-panel">
        <button class="close-btn" aria-label="Close navigation menu" type="button" @click="closeMenu">×</button>
        <nav class="menu-nav">
          <a href="#home" @click="closeMenu">Home</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#services" @click="closeMenu">Services</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </nav>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
  text-align: center;
  border-bottom: 1px solid #333333;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header.scrolled .logo {
  color: #000000;
}

.header.scrolled .menu-btn span {
  background: #000000;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu-btn {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.menu-btn span {
  display: block;
  height: 3px;
  width: 100%;
  background: #ffffff;
  border-radius: 999px;
}

.menu-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 4px;
}

.menu-overlay {
  pointer-events: none;
  opacity: 0;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.menu-overlay.open {
  pointer-events: auto;
  opacity: 1;
}

.menu-panel {
  position: relative;
  width: 400px;
  max-width: 90vw;
  height: 100%;
  padding: 80px 40px 40px;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  border-right: 1px solid #333333;
  box-shadow: 20px 0 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-overlay.open .menu-panel {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: transparent;
  color: #ffffff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  transform: rotate(90deg);
}

.close-btn:hover,
.menu-btn:hover {
  opacity: 0.85;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.menu-nav a {
  color: #ffffff;
  background: transparent;
  border: none;
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  padding: 18px 24px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.menu-nav a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #ffffff;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.menu-nav a:hover {
  background: rgba(255, 255, 255, 0.05);
  padding-left: 32px;
}

.menu-nav a:hover::before {
  transform: scaleY(1);
}

.logo {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
}

.tagline {
  font-size: 14px;
  opacity: 0.8;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0;
}

@media (max-width: 768px) {
  .logo {
    font-size: 20px;
  }
  
  .menu-panel {
    width: 100%;
    max-width: 100%;
    padding: 60px 24px 24px;
  }
  
  .menu-nav a {
    font-size: 18px;
    padding: 14px 20px;
  }
  
  .close-btn {
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
}
</style>
