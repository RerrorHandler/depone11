<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  font-family: "GOTHIC";
  outline: none;
}
*:focus {
  outline: none;
}
body {
  overflow-x: hidden;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
}
header {
  background-image: url('assets/first/headerbg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
footer {
  background-image: url('assets/first/footerbg.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.productlist {
  background-image: url('assets/second/bggoods.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.menu {
  background-image: url('assets/news/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
}

@font-face {
  font-family: "GOTHIC";
  src: local("GOTHIC"),
   url(assets/fonts/GOTHIC.TTF) format("truetype");
}
</style>
