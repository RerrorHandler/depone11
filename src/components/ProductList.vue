<template>
    <div>
        <div class="flex flex-row flex-nowrap items-center mb-28 mt-32">
            <div id="line"></div>
            <div class="mx-5 max-w-sm w-full">
                <span class="text-5xl block text-center">Роллы</span>
            </div>
            <div id="line"></div>
        </div>
        <div>
            <div :class="[`parent1 container mx-auto ${visib}`]">
                <div v-for="product in products" 
                    :key="product.id" :class="[`div1${product.id}`]">
                    <div>
                        <img :src="require(`../assets/second/goods${product.id}` + '.png')">
                        <span>{{product.title}}</span>
                        <span>{{product.description}}</span>
                        <div>
                            <button @click="addProductToCart(product), visib == '-z-10'" class="rounded-2xl bg-yellow-500 text-white px-8 py-1">В корзину</button>
                            <span>{{ product.price }} тг</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  },
  data () {
      return {visib : "z-10"};
  }
}
</script>
