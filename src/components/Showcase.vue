<template>
    <div class="flex flex-col mx-auto">
        <div class="flex flex-row flex-nowrap items-center mb-28">
            <div id="line"></div>
            <div class="mx-40 max-w-sm w-full">
                <span class="text-5xl block text-center">Горячие сеты</span>
            </div>
            <div id="line"></div>
        </div>
        <div class="container mx-auto" id="showcase">
            <Hooper :itemsToShow="3" :autoPlay="true" :playSpeed="5000" :itemsToSlide="1" :infiniteScroll="true" id="slider">
                <Slide class="px-20">
                    <div class="flex flex-col">
                        <img src="../assets/first/slide3.png">
                        <button class="text-2xl mx-24 mt-11 border-4 block border-black rounded-lg text-center">Заказать</button>
                    </div>
                </Slide>
                <Slide class="px-20">
                    <div class="flex flex-col">
                        <img src="../assets/first/slide2.png">
                        <button class="text-2xl mx-24 mt-11 border-4 block border-black rounded-lg text-center">Заказать</button>
                    </div>
                </Slide>
                <Slide class="px-20">
                    <div class="flex flex-col">
                        <img src="../assets/first/slide1.png">
                        <button class="text-2xl mx-24 mt-11 border-4 block border-black rounded-lg text-center">Заказать</button>
                    </div>
                </Slide>
                <Slide class="px-20">
                    <div class="flex flex-col">
                        <img src="../assets/first/slide1.png">
                        <button class="text-2xl mx-24 mt-11 border-4 block border-black rounded-lg text-center">Заказать</button>
                    </div>
                </Slide>
                <Slide class="px-20">
                    <div class="flex flex-col">
                        <img src="../assets/first/slide2.png">
                        <button class="text-2xl mx-24 mt-11 border-4 block border-black rounded-lg text-center ">Заказать</button>
                    </div>
                </Slide>
            </Hooper>
        </div>
    </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Showcase',
  components: {
    Hooper,
    Slide
  }
};
</script>

<style>
#slider {
    height: 555px;
}
#line {
    width: 710px;
    height: 2px;
    background-color: black;
}
</style>
