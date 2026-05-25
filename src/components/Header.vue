<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-content">
      <button class="menu-btn" aria-label="Open navigation menu" type="button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="logo">Creator Cartel</h1>
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
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.25s ease;
  z-index: 1000;
}

.menu-overlay.open {
  pointer-events: auto;
  opacity: 1;
}

.menu-panel {
  position: relative;
  width: min(90vw, 420px);
  padding: 40px 30px;
  background: #a9a9a9;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.08); */
  color: #ffffff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

.close-btn:hover,
.menu-btn:hover {
  opacity: 0.85;
}

.menu-nav {
  display: grid;
  gap: 18px;
  text-align: center;
}

.menu-nav a {
  color: #000;
  background-color: #ffffff;
  border-left: 3px solid #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;
  padding: 10px 20px;
  border-radius: 10px;
}

.menu-nav a:hover {
  color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  border-left: 3px solid #ffffff;
  /* border-top: 3px solid #ffffff; */
  /* border-bottom: 3px solid #ffffff; */
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
  .header-content {
    /* flex-direction: column;
    gap: 5px; */
  }
  
  .logo {
    font-size: 20px;
  }
  
  .menu-panel {
    width: min(95vw, 100%);
    padding: 30px 24px;
  }
  
  .menu-nav a {
    font-size: 20px;
  }
}
</style>
