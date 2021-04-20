<template>
  <header class=" h-56 w-full text-gray-50 flex items-center justify-center">
    <div class="container flex flex-row flex-nowrap items-center">
      <nav class=" p-10">
        <a href="">
          <img src="../assets/first/logo.png">
        </a>
      </nav>
      <nav class="max-w-4xl w-full flex justify-between text-3xl ml-52">
        <router-link to="/" class="hover:underline">ГЛАВНАЯ</router-link>
        <router-link to="/menu" class="hover:underline">МЕНЮ</router-link>
        <router-link to="/news" class="hover:underline">НОВОСТИ</router-link>
        <router-link to="/delivery" class="hover:underline">ДОСТАВКА</router-link>
      </nav>
    </div>
  </header>
</template>