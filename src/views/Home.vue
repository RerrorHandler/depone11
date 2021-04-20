<template>
  <div class="home">
      <Header />
      <div class="flex flex-col" id="homecontent">
        <Main />
        <Showcase />
        <SubShowcase />
      </div>
      <Footer />
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Showcase from '@/components/Showcase.vue'
import SubShowcase from '@/components/SubShowcase.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Main,
    Showcase,
    SubShowcase
  }
}
</script>

<style>
.home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#homecontent {
  flex: 1;
}
</style>
