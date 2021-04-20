<template>
    <div class="flex flex-row container mx-auto w-screen" id="main">
        <div class="w-44 border-r-2 flex flex-col items-center" id="main-nav">
            <nav class="flex flex-col items-center mt-24 space-y-16">
                <a href="" class=""><img src="../assets/first/nav1.png"></a>
                <a href=""><img src="../assets/first/nav2.png"></a>
                <a href=""><img src="../assets/first/nav3.png" class="-ml-6"></a>
                <a href=""><img src="../assets/first/nav4.png"></a>
            </nav>
        </div>
        <div class="relative w-full">
            <div class="absolute z-30" id="maincont">
                <img src="../assets/first/maincont.png">
            </div>
            <div class="absolute z-20" id="suspre">
                <img src="../assets/first/PREMIUM.png">
                <img src="../assets/first/SUSHI.png" id="sushi">
            </div>
        </div>
    </div>
</template>

<style>
#main-nav {
    border-color: #395f01;
    height: 710px;
    margin-left:-9.579563597658328vw;
}
#main {
    
    width: 1920px;
    height: 1240px;
}
#maincont {
    left: 24%;
    top: 150px;
}
#suspre {
    top: 130px;
    left: 50px;
}
</style>