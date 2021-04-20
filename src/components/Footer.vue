<template>
    <footer class="h-56 w-full text-gray-50 flex items-center">
        <div class="mx-auto relative">
            <a href="">
                <img src="../assets/first/logo.png">
            </a>
            <div class="absolute flex flex-row space-x-8" id="feedback">
                <a href=""><img src="../assets/first/insta.png"></a>
                <a href=""><img src="../assets/first/telg.png"></a>
                <button @click="FooterModal = !FooterModal"><img src="../assets/first/feedbk.png"></button> 
            </div>
        </div>
        <div v-if="FooterModal == true" class="absolute hm-full inset-0 z-50 flex justify-center items-center">
            <div class="mx-auto my-auto rounded-3xl bg-white h-96 w-96 text-black flex flex-col p-3">
                <span>Имя</span>
                <input type="text" class="border-2 border-gray-900 rounded-3xl pl-2">
                <span>Номер</span>
                <input type="text" class="border-2 border-gray-900 rounded-3xl pl-2">
                <span>Описание</span>
                <textarea name="" id="" cols="30" rows="10" class=" border-2 border-gray-900 rounded-3xl resize-none p-2"></textarea>
                <button class="p-3 rounded-3xl" @click="FooterModal = !FooterModal">Отправить жалобу</button>
            </div>
        </div>
        <div v-if="FooterModal == true" class="absolute hm-full inset-0 z-40 bg-black opacity-25">
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {FooterModal : false};
    }
}
</script>

<style>
.hm-full {
    height: 2880px;
}
#feedback {
    left: -680px;
    bottom: -40px;
}
</style>