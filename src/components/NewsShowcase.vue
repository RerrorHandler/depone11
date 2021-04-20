<template>
    <div>
        <div class="flex flex-row items-center mt-32">
            <div id="line"></div>
            <div class="mx-5 max-w-sm w-full">
                <span class="text-5xl block text-center">НОВОСТИ</span>
            </div>
            <div id="line"></div>
        </div>
        <div class="mt-32 container mx-auto mb-80">
            <Hooper :itemsToShow="1" :autoPlay="true" :playSpeed="5000" :itemsToSlide="1" :infiniteScroll="true" class="NewsSlider">
                <Slide>
                    <img src="../assets/news/slide1.png">
                </Slide>
            </Hooper>
        </div>
        <div class="flex flex-col text-9xl tracking-widest container mx-auto text-center mb-96">
            <span>Мы выпустили</span>
            <span class="mb-7">свой плейлист</span>
            <div>
                <img src="../assets/news/newsinfo.png" class="newsinfo">
            </div>
        </div>
    </div>
</template>

<style scoped>
#newsinfo {
    width: 1478px;
    height: 573px;
}
.NewsSlider {
    width: 1478px;
    height: 634px;
}
</style>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'NewsShowcase',
  components: {
    Hooper,
    Slide
  }
};
</script>