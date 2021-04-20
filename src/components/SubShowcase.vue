<template>
    <div class="container mx-auto px-24">
        <div class="parent">
            <div class="div1"> 
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/first/icon1.png" class=" transform scale-75 mt-3">
                    <span class="text-3xl font-medium mt-9 mb-20 text-center">Fresh made</span>
                    <span class="text-center text-base">Мы гарантируем свежесть продуктов и не используем замороженную рыбу</span>
                </div>
            </div>
            <div class="div2">
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/first/icon2.png" class=" transform scale-75 -mt-7">
                    <span class="text-3xl font-medium mt-9 mb-12 text-center">Рецепты от шеф-повора</span>
                    <span class="text-center text-base">Мы предлагаем как классические суши, так и авторские рецепты от шеф-повара</span>
                </div>
            </div>
            <div class="div3">
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/first/icon3.png" class=" transform scale-75 -mt-11">
                    <span class="text-3xl font-medium mt-9 mb-12 text-center">Качественные ингредиенты</span>
                    <span class="text-center text-base">Мы не используем усилители вкуса. Все продукты закупаем у проверенных поставщиков</span>
                </div>
            </div>
            <div class="div4">
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/first/icon4.png" class=" transform scale-75 -mt-9">
                    <span class="text-3xl font-medium mt-9 mb-20 text-center">Чистая кухня</span>
                    <span class="text-center text-base">Весь процесс приготовления проходит в соответствии со всеми санитарными нормами.</span>
                </div>
            </div>
        </div>
    </div>    
</template>
<style scoped>
.parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 70px;
grid-row-gap: 120px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; margin-bottom: 120px;}
</style>