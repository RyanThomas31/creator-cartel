<template>
  <div class="home-page">
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Brands />
      <ContactForm />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './Header.vue'
import Hero from './Hero.vue'
import About from './About.vue'
import Services from './Services.vue'
import Brands from './Brands.vue'
import ContactForm from './ContactForm.vue'
import Footer from './Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Hero,
    About,
    Services,
    Brands,
    ContactForm,
    Footer
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
}

main {
  width: 100%;
}
</style>
