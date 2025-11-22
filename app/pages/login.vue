<script setup>
definePageMeta({
    layout: 'layout2'
})
</script>

<template>
    <section class="h-[80vh] relative flex justify-center gap-10 items-center">
        <div class="hidden xl:flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="198.098" height="203.312" viewBox="0 0 198.098 203.312">
                <g id="Group_22" data-name="Group 22" transform="translate(-1079.798 -422.058)">
                    <path id="Path_18" data-name="Path 18"
                        d="M1178.847,424.665h-83.122a15.927,15.927,0,0,0-15.927,15.927v83.122a99.048,99.048,0,0,0,99.049,99.049h83.122a15.927,15.927,0,0,0,15.927-15.927V523.714A99.049,99.049,0,0,0,1178.847,424.665Z"
                        fill="#fff" />
                    <g id="Group_21" data-name="Group 21">
                        <path id="Path_19" data-name="Path 19"
                            d="M1245.578,426.674v45.221a4.614,4.614,0,0,1-4.614,4.614h-18a106.329,106.329,0,0,0-101.8,75.658,4.645,4.645,0,0,1-4.431,3.354h0a4.64,4.64,0,0,1-4.612-4.849A133.548,133.548,0,0,1,1240.73,422.061,4.642,4.642,0,0,1,1245.578,426.674Z"
                            fill="#ffd400" />
                        <path id="Path_20" data-name="Path 20"
                            d="M1112.115,620.755V575.533a4.614,4.614,0,0,1,4.614-4.614h18a106.329,106.329,0,0,0,101.8-75.658,4.644,4.644,0,0,1,4.431-3.354h0a4.642,4.642,0,0,1,4.612,4.849,133.548,133.548,0,0,1-128.611,128.611A4.642,4.642,0,0,1,1112.115,620.755Z"
                            fill="#ffd400" />
                    </g>
                </g>
            </svg>
            <span class="text-[52.19px] text-thwhite font-medium mt-2">ضمین</span>
            <span class="text-[22.28px] text-thwhite font-medium">www.rezamin.ir</span>
        </div>
        <div>
            <h1 class="text-[33px] font-medium text-thwhite text-center">ورود به ضمین</h1>
            <p class="mt-4 text-thyellow text-xl text-center">شماره موبایل خود را وارد کنید.</p>ّ
            <form action="#" class="w-[300px] sm:w-[400px]">
                <input type="text"
                    class="rounded-[15.76px] bg-thwhite/5 mt-6.5 outline-none h-[66px] w-full px-4 text-thwhite text-xl"
                    dir="ltr">
                <button
                    class="flex items-center justify-center gap-2.5 text-[21.87px] w-full h-[66px] bg-thyellow text-thblue rounded-[15.67px] mt-6.5 cursor-pointer active:scale-98">
                    ورود
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.42" height="16.532" viewBox="0 0 9.42 16.532">
                        <path id="Path_17" data-name="Path 17"
                            d="M811.3,612.994a1.152,1.152,0,0,0-1.631,0l-7.112,7.112a1.152,1.152,0,0,0,0,1.631l7.112,7.113a1.153,1.153,0,0,0,1.631-1.631l-6.3-6.3,6.3-6.3A1.152,1.152,0,0,0,811.3,612.994Z"
                            transform="translate(-802.215 -612.656)" fill="#191970" />
                    </svg>
                </button>
            </form>
            <p class="text-xl text-thwhite mt-6.5 text-center">
                هنوز حساب کاربری ندارید؟
                <LoaderLink to="/" class="text-thyellow hover:underline">
                    ثبت نام
                </LoaderLink>
            </p>
        </div>
    </section>

    <div class="absolute left-0 top-1/2 -translate-y-1/2 -z-20 hidden 2xl:block">
        <nuxt-img src="/images/9.png"></nuxt-img>
    </div>
    <div class="absolute right-0 top-1/2 -translate-y-1/2 -z-20 hidden 2xl:block">
        <nuxt-img src="/images/9.png"></nuxt-img>
    </div>
</template>