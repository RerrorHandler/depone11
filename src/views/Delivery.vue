<template>
  <div class="menu">
    <Header />
    <DeliveryMain />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import DeliveryMain from '@/components/DeliveryMain.vue'
export default {
  name: 'Delivery',
  components: {
    Header,
    Footer,
    DeliveryMain
  }
}
</script>