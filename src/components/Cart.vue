<template>
    <div>
        <div class=" mx-auto mb-20 border-2 border-gray-400 relative mt-20 cart">
            <button v-show="!products.length" @click="toggleModal = !toggleModal" class="absolute border-2 border-gray-400 p-11 left-16 top-16">
                <img src="../assets/second/plus.png">
            </button>
            <div v-show="!products.length"   class="absolute flex flex-col items-center text-center" id="cartt">
                    <div>
                        <img src="../assets/second/cart.png">
                    </div>
                    <span>ДОБАВЬТЕ ТОВАР В КОРЗИНУ<br> У НАС ВСЕ ОЧЕНЬ ВКУСНОЕ</span>
                    <button>ИСТОРИЯ ЗАКАЗОВ</button>
                </div>
                <div v-for="product in products" :key="product.id" class="text-3xl m-10">
                    {{ product.title }} - {{ product.price }} x {{ product.quantity }}
                </div>
                <button v-show="products.length" :disabled="!products.length" @click="checkout(products) " class="ml-10 px-8 p-2 bg-yellow-400 rounded-3xl mt-5">Checkout</button><span v-show="products.length" class="text-2xl ml-5">Сумма {{ total}}</span>
            </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  },
}
</script>
