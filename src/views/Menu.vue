<template>
  <div class="menu-check">
    <Header />
    <MenuShowcase />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MenuShowcase from '@/components/MenuShowcase.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    MenuShowcase
  }
}
</script>