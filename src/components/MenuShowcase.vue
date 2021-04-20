<template>
    <div>
        <div v-if="toggleModal == false" class="flex flex-row flex-nowrap items-center mb-28 mt-32">
            <div id="line"></div>
            <div class="mx-5 max-w-sm w-full">
                <span class="text-5xl block text-center">МЕНЮ</span>
            </div>
            <div id="line"></div>
        </div>
        <div v-if="toggleModal == false" class="parent container mx-auto place-items-stretch">
            <button @click="toggleModal = !toggleModal" class="div1 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/1.png">РОЛЛЫ</button>
            <button @click="toggleModal = !toggleModal" class="div2 pt-28 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/2.png">СУШИ</button>
            <button @click="toggleModal = !toggleModal" class="div3 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/3.png">СЕТЫ</button>
            <button @click="toggleModal = !toggleModal" class="div4 pt-6 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/4.png">ЗАКУСКИ</button>
            <button @click="toggleModal = !toggleModal" class="div5 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/5.png">НАПИТКИ</button>
            <button @click="toggleModal = !toggleModal" class="div6 px-5 flex flex-col items-center border-2 border-gray-400 hover:cursor-pointer"><img src="../assets/second/6.png" class="-m-10 transform scale-75">СОУСЫ</button>
        </div>
        <div v-show="toggleModal == false">
            <Cart />
        </div>
        <div v-if="toggleModal == true" class="flex flex-row flex-nowrap items-center mb-28 mt-32">
            <div id="line"></div>
            <div class="mx-5 max-w-sm w-full">
                <span class="text-5xl block text-center">Роллы</span>
            </div>
            <div id="line"></div>
        </div>
        <div v-if="toggleModal == true" class="productlist">
            <div class="parent1 container mx-auto pb-36">
                <div v-for="product in products" 
                    :key="product.id" :class="[`div1${product.id}`]">
                    <div>
                        <img :src="require(`../assets/second/goods${product.id}` + '.png')">
                        <div class="flex flex-col text-center">
                            <span class="text-3xl">{{product.title}}</span>
                            <span>{{product.description}}</span>
                        </div>
                        <div>
                            <button @click="addProductToCart(product), toggleModal = !toggleModal" class="rounded-3xl mt-12 bg-yellow-500 text-white px-8 py-1">В корзину</button>
                            <span class="ml-8">{{ product.price }} <span>тг</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
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
      return {toggleModal : false};
  },
  components: {
      Cart
  }
}
</script>

<style>
#cartt {
    width: 500px;
    left: 35%;
    top: 37%;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 140px;
grid-row-gap: 140px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }

.parent1 {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 220px;
grid-row-gap: 220px;
}

.div11 { grid-area: 1 / 1 / 2 / 2; }
.div11 img {width: 322px; height: 210px;}
.div12 { grid-area: 1 / 2 / 2 / 3; }
.div12 img {width: 322px; height: 210px;}
.div13 { grid-area: 1 / 3 / 2 / 4; }
.div13 img {width: 322px; height: 210px;}
.div14 { grid-area: 2 / 1 / 3 / 2; }
.div14 img {width: 322px; height: 210px;}
.div15 { grid-area: 2 / 2 / 3 / 3; }
.div15 img {width: 322px; height: 210px;}
.div16 { grid-area: 2 / 3 / 3 / 4; }
.div16 img {width: 322px; height: 210px;}
.div17 { grid-area: 3 / 1 / 4 / 2; }
.div17 img {width: 322px; height: 210px;}
.div18 { grid-area: 3 / 2 / 4 / 3; }
.div18 img {width: 322px; height: 210px;}
.div19 { grid-area: 3 / 3 / 4 / 4; }
.div19 img {width: 322px; height: 210px;}
.cart {
    height: 910px;
    width: 1700px;
}
</style>