<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-header animate-fade-in-up">
        <h2>Get In Touch</h2>
        <p>Ready to build something amazing? Let's discuss your project and bring your vision to life.</p>
      </div>
      
      <form 
        id="form" 
        class="contact-form animate-scale-in" 
        action="https://api.web3forms.com/submit" 
        method="POST"
        @submit="handleSubmit"
      >
        <input type="hidden" name="access_key" value="3d3977aa-a3c8-4213-b59f-ec30038e5732">
        
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              v-model="form.name" 
              required
              placeholder="Your name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              v-model="form.email" 
              required
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            v-model="form.message" 
            required
            rows="5"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Sending...</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    handleSubmit(e) {
      this.isSubmitting = true
      // Let the form submit naturally to Web3Forms
      setTimeout(() => {
        this.isSubmitting = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid #333333;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
}

.contact-header h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #ffffff;
}

.contact-header p {
  font-size: 18px;
  color: #aaaaaa;
  line-height: 1.8;
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666666;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 16px 32px;
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .contact-header h2 {
    font-size: 36px;
  }
  
  .contact-header p {
    font-size: 16px;
  }
  
  .contact-form {
    padding: 30px 24px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-group input,
  .form-group textarea {
    font-size: 14px;
    padding: 12px 14px;
  }
}
</style>
