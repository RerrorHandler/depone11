<template>
  <div class="menu">
    <Header />
    <NewsShowcase />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NewsShowcase from '@/components/NewsShowcase.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    NewsShowcase
  }
}
</script>