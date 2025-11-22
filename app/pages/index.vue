<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperRef = ref(null)
const swiperInstance = ref(null)

function onSwiperInit(swiper) {
    swiperInstance.value = swiper
}

function goNext() {
    if (swiperInstance.value && typeof swiperInstance.value.slideNext === 'function') {
        swiperInstance.value.slideNext(300)
    } else {
    }
}

function goPrev() {
    if (swiperInstance.value && typeof swiperInstance.value.slidePrev === 'function') {
        swiperInstance.value.slidePrev(300)
    } else {
    }
}

const openIndex2 = ref(null)

const toggle2 = (i) => {
    openIndex2.value = openIndex2.value === i ? null : i
}

const faq = ref([
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' },
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' },
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' },
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' },
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' },
    { q: 'در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده ؟', a: 'متن توضیحات' }
])
</script>

<template>
    <section class="lg:grid grid-cols-12 lg:gap-16 2xl:gap-32 container">
        <div class="hidden lg:block col-span-7 my-auto">
            <h1 class="text-thblue font-medium">
                <span class="text-5xl 2xl:text-[3.75rem]">ضمین</span><br>
                <span class="text-3xl 2xl:text-[2.921875rem]">ضامن سرمایه‌گزاری شما در حوزه اراضی</span>
            </h1>
            <p class="text-lg 2xl:text-[1.3125rem] mt-2.5 text-thblue font-light text-justify">
                در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده
                حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از سوی
                دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود، از طریق سپهرینو
                اقدام به جذب سرمایه نمایند.
            </p>
            <div class="flex items-center justify-start mt-6">
                <LoaderLink to="/"
                    class="px-5 pb-2.5 pt-1.5 bg-thyellow rounded-xl flex items-center gap-2 text-thblue text-xl">
                    شروع سرمایه‌گزاری
                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="9.419" height="16.532"
                        viewBox="0 0 9.419 16.532">
                        <g id="Group_17" data-name="Group 17" transform="translate(-1545.803 -748.084)">
                            <path id="Path_20" data-name="Path 20"
                                d="M1554.885,748.422a1.154,1.154,0,0,0-1.631,0l-7.113,7.113a1.154,1.154,0,0,0,0,1.631l7.113,7.112a1.153,1.153,0,1,0,1.631-1.631l-6.3-6.3,6.3-6.3A1.154,1.154,0,0,0,1554.885,748.422Z"
                                fill="#191970" />
                        </g>
                    </svg>
                </LoaderLink>
            </div>
        </div>
        <div class="hidden lg:block col-span-5">
            <nuxt-img src="/images/1.png" class="w-full h-auto max-w-160"></nuxt-img>
        </div>
        <div class="flex lg:hidden flex-col items-center mt-32">
            <nuxt-img class="w-full max-w-[450px] " src="/images/1.png"></nuxt-img>
            <h2 class="text-3xl md:text-[53px] font-semibold text-thblue text-center mt-8">به رضمین خوش آمدید</h2>
            <p class="text-xl md:text-[27px] font-medium text-thblue mt-4">پلتفرم واگذاری انبوه سهام اراضی</p>
            <LoaderLink to="/login"
                class="py-2 px-4 rounded-[8.45px] bg-thyellow text-xl md:text-[41px] text-thblue mt-5">
                ثبت نام / ورود
            </LoaderLink>
            <!-- <ClientOnly>
                <Swiper :modules="[Autoplay, Pagination, Navigation]" :slides-per-view="1" :loop="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class='${className} custom-bullet'></span>`
                        }
                    }" class="mt-15!">
                    <SwiperSlide>
                        <nuxt-img src="/images/8.png" class="w-full h-auto"></nuxt-img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <nuxt-img src="/images/8.png" class="w-full h-auto"></nuxt-img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <nuxt-img src="/images/8.png" class="w-full h-auto"></nuxt-img>
                    </SwiperSlide>
                </Swiper>
            </ClientOnly> -->
        </div>
    </section>

    <section
        class="mt-36 bg-thblue bg-[url(./images/test.png)] bg-no-repeat bg-cover bg-center pt-16 lg:pt-32 pb-10 lg:pb-20">
        <h2 class="text-thyellow text-center text-xl md:text-[35px] font-medium">
            چطور سرمایه‌گزاری کنیم؟
        </h2>

        <div class="hidden md:flex justify-between items-center container gap-8 lg:gap-20 mt-10 lg:mt-25 xl:px-20">
            <div class="w-80" v-for="i in 3">
                <h3 class="text-xl xl:text-[28px] text-thyellow text-center">افزایش موجودی کیف پول</h3>
                <p class="text-justify [text-align-last:center] text-thwhite xl:text-[19.55px] mt-2.5">
                    در گام بعدی برای خرید سهام به میزان مورد نظر موجودی کیف پول حساب کاربری خود را افزایش دهید.
                </p>
            </div>
        </div>

        <div class="hidden md:flex w-full justify-center items-center container px-20 xl:px-40 mt-5">
            <nuxt-img class="w-full h-auto select-none! pointer-events-none" src="/images/2.png"></nuxt-img>
        </div>

        <div class="hidden md:flex justify-between items-center container gap-20 mt-5 xl:px-20">
            <div></div>
            <div class="w-80" v-for="i in 2">
                <h3 class="text-xl xl:text-[28px] text-thyellow text-center">افزایش موجودی کیف پول</h3>
                <p class="text-justify [text-align-last:center] text-thwhite xl:text-[19.55px] mt-2.5">
                    در گام بعدی برای خرید سهام به میزان مورد نظر موجودی کیف پول حساب کاربری خود را افزایش دهید.
                </p>
            </div>
            <div></div>
        </div>
    </section>

    <section class="mt-20 lg:mt-52 container">
        <h2 class="text-xl md:text-[35px] font-medium text-thblue text-center">نمادهای قابل سرمایه‌گزاری</h2>
        <div class="mt-15 lg:mt-40">
            <ClientOnly>
                <div class="relative">
                    <button @click="goPrev"
                        class="absolute top-1/2 -translate-y-1/2 z-50 right-0 hover:scale-110 cursor-pointer">
                        <svg class="size-4 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="33.851"
                            height="33.851" viewBox="0 0 33.851 33.851">
                            <g id="Group_57" data-name="Group 57" transform="translate(-1774.852 -2913.546)">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="16.925" cy="16.925" r="16.925"
                                    transform="translate(1774.852 2913.546)" fill="#ffd400" />
                                <path id="Path_55" data-name="Path 55"
                                    d="M1786.59,2939.878a1.369,1.369,0,0,0,1.935,0l8.439-8.439a1.367,1.367,0,0,0,0-1.935l-8.439-8.439a1.368,1.368,0,0,0-1.935,1.935l7.471,7.471-7.471,7.472A1.369,1.369,0,0,0,1786.59,2939.878Z"
                                    fill="#191970" />
                            </g>
                        </svg>
                    </button>
                    <button @click="goNext"
                        class="absolute top-1/2 -translate-y-1/2 z-50 left-0 hover:scale-110 cursor-pointer">
                        <svg class="size-4 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="33.851"
                            height="33.851" viewBox="0 0 33.851 33.851">
                            <g id="Group_58" data-name="Group 58" transform="translate(-120.143 -2913.546)">
                                <circle id="Ellipse_2" data-name="Ellipse 2" cx="16.925" cy="16.925" r="16.925"
                                    transform="translate(120.143 2913.546)" fill="#ffd400" />
                                <path id="Path_56" data-name="Path 56"
                                    d="M142.255,2939.878a1.369,1.369,0,0,1-1.935,0l-8.439-8.439a1.369,1.369,0,0,1,0-1.935l8.439-8.439a1.368,1.368,0,0,1,1.935,1.935l-7.471,7.471,7.471,7.472A1.367,1.367,0,0,1,142.255,2939.878Z"
                                    fill="#191970" />
                            </g>
                        </svg>
                    </button>

                    <Swiper ref="swiperRef" :modules="[Autoplay, Navigation]" :slides-per-view="1" :loop="true"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }" @swiper="onSwiperInit">
                        <SwiperSlide v-for="i in 4" class="px-5 sm:px-15 md:px-20">
                            <nuxt-img src="/images/3.png"
                                class="w-full h-auto rounded-t-[20px] xl:rounded-t-[40px] object-cover"></nuxt-img>
                            <div
                                class="bg-thyellow w-full md:text-xl xl:text-[33px] text-thblue py-1 md:py-4 rounded-b-[20px] xl:rounded-b-[40px] text-center">
                                اراضی زکریا (زکریا)</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </ClientOnly>
        </div>
    </section>

    <section class="mt-36 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 xl:gap-32 container">
        <div class="my-auto">
            <h2 class="text-lg sm:text-[25px] 2xl:text-[31px] font-medium text-thblue text-center lg:text-start"
                v-auto-persian-number>قطعه پلاک 897 شهری به متراژ 38 هکتار
            </h2>
            <p class="flex items-center gap-7 sm:text-xl 2xl:text-[27px] text-thblue justify-center mt-5">
                آخرین وضعیت قیمت:
                <small class="text-xl sm:text-3xl 2xl:text-[35px]" v-auto-persian-number>5,374,298 ريال</small>
            </p>
            <div class="flex lg:hidden items-center justify-center mt-8 2xl:mt-18">
                <LoaderLink to="/"
                    class="px-5 pb-2.5 pt-1.5 bg-thyellow rounded-xl flex items-center gap-2 text-thblue sm:text-lg md:text-xl">
                    اطلاعات بیشتر و مشخصات سهام
                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="9.419" height="16.532"
                        viewBox="0 0 9.419 16.532">
                        <g id="Group_17" data-name="Group 17" transform="translate(-1545.803 -748.084)">
                            <path id="Path_20" data-name="Path 20"
                                d="M1554.885,748.422a1.154,1.154,0,0,0-1.631,0l-7.113,7.113a1.154,1.154,0,0,0,0,1.631l7.113,7.112a1.153,1.153,0,1,0,1.631-1.631l-6.3-6.3,6.3-6.3A1.154,1.154,0,0,0,1554.885,748.422Z"
                                fill="#191970" />
                        </g>
                    </svg>
                </LoaderLink>
            </div>
            <div class="flex justify-between items-center mt-12 xl:mt-5 2xl:mt-16">
                <div class="flex flex-col gap-y-[15px] sm:gap-y-[25px]" v-for="i in 3">
                    <div class="relative size-[100px] sm:size-[120px] 2xl:size-[176.49px]">
                        <svg class="size-[100px] sm:size-[120px] 2xl:size-[176.49px]" xmlns="http://www.w3.org/2000/svg"
                            width="176.485" height="176.485" viewBox="0 0 176.485 176.485">
                            <g id="_30" data-name="30" transform="translate(-1287.095 -3543.796)">
                                <g id="Group_46" data-name="Group 46">
                                    <g id="Group_45" data-name="Group 45">
                                        <path id="Path_50" data-name="Path 50"
                                            d="M1375.338,3543.8v20.055a68.188,68.188,0,1,0,59.061,102.284l17.361,10.025.029-.043a88.245,88.245,0,1,1-76.451-132.321Z"
                                            fill="#ffd400" />
                                    </g>
                                </g>
                                <g id="Group_48" data-name="Group 48">
                                    <g id="Group_47" data-name="Group 47">
                                        <path id="Path_51" data-name="Path 51"
                                            d="M1443.525,3632.038a68.186,68.186,0,0,0-68.187-68.187V3543.8a88.246,88.246,0,0,1,76.422,132.364l-17.361-10.025A67.875,67.875,0,0,0,1443.525,3632.038Z"
                                            fill="#191970" fill-rule="evenodd" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div
                            class="flex flex-col items-center text-xl 2xl:text-[31.37px] font-medium text-thblue absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                            <span v-auto-persian-number>812</span>
                            <span>نفر</span>
                        </div>
                    </div>
                    <span class="text-xs sm:text-base 2xl:text-xl text-thblue font-blue">افراد مشارکت کننده</span>
                </div>
            </div>
            <div class="hidden lg:flex items-center justify-start mt-8 2xl:mt-18">
                <LoaderLink to="/"
                    class="px-5 pb-2.5 pt-1.5 bg-thyellow rounded-xl flex items-center gap-2 text-thblue text-xl">
                    اطلاعات بیشتر و مشخصات سهام
                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="9.419" height="16.532"
                        viewBox="0 0 9.419 16.532">
                        <g id="Group_17" data-name="Group 17" transform="translate(-1545.803 -748.084)">
                            <path id="Path_20" data-name="Path 20"
                                d="M1554.885,748.422a1.154,1.154,0,0,0-1.631,0l-7.113,7.113a1.154,1.154,0,0,0,0,1.631l7.113,7.112a1.153,1.153,0,1,0,1.631-1.631l-6.3-6.3,6.3-6.3A1.154,1.154,0,0,0,1554.885,748.422Z"
                                fill="#191970" />
                        </g>
                    </svg>
                </LoaderLink>
            </div>
        </div>
        <div class="my-auto">
            <nuxt-img src="/images/4.png" class="w-full h-auto rounded-[13px]"></nuxt-img>
            <p class="text-xl md:text-3xl text-thblue font-light mt-5 text-center">نقشه زمین</p>
        </div>
    </section>

    <section class="mt-25 lg:mt-58 xl:container">
        <h2 class="text-[35px] text-thblue font-medium hidden xl:block">مزیت‌های سرمایه‌گزاری از طریق ضمین</h2>
        <div
            class="py-10 xl:pl-50 2xl:pl-80 xl:pr-10 xl:rounded-2xl mt-5 bg-thyellow/40 xl:bg-[url(./images/5.png)] bg-no-repeat bg-cover bg-center">
            <div class="container xl:hidden">
                <h2 class="text-xl md:text-[35px] text-thblue font-medium block xl:hidden text-center lg:text-start">مزیت‌های سرمایه‌گزاری از طریق ضمین</h2>
                <p class="text-base md:text-[25px] xl:text-[21px] font-light text-thblue mt-4 xl:mt-0 [text-align:justify] [text-align-last:center] lg:[text-align-last:auto">
                    در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی
                    شده
                    حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از
                    سوی
                    دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود، سرمایه نمایند.
                    در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی
                    شده
                    حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از
                    سوی
                    دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود.
                </p>
            </div>
            <p class="text-[21px] font-light text-thblue text-justify hidden xl:block">
                در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی
                شده
                حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از
                سوی
                دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود، سرمایه نمایند.
                در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی
                شده
                حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از
                سوی
                دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود.
            </p>
        </div>
    </section>

    <section class="mt-25 lg:mt-58 bg-thgray-200/10 py-24 hidden lg:block">
        <div class="container">
            <h2 class="text-[26px] text-thblue">سوالات متداول</h2>
            <p class="text-[21px] text-justify text-thblue font-light mt-6">
                در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده
                حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از سوی
                دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود، از طریق سپهرینو
                اقدام به جذب سرمایه نمایند.
            </p>

            <div class="mt-8">
                <div v-for="(item, i) in faq" :key="i" :class="[
                    'overflow-hidden',
                    i !== faq.length - 1 ? 'border-b-[0.25px] border-b-thgray-200' : ''
                ]">
                    <button @click="toggle2(i)"
                        class="w-full flex px-4 py-5 gap-2 transition text-[21px] text-thblue font-light cursor-pointer">
                        <div class="shrink-0">
                            <svg :class="openIndex2 === i ? '-rotate-90' : ''" xmlns="http://www.w3.org/2000/svg"
                                width="25.491" height="25.491" viewBox="0 0 25.491 25.491">
                                <g id="Group_72" data-name="Group 72" transform="translate(-1668.88 -5394.653)">
                                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="12.746" cy="12.746" r="12.746"
                                        transform="translate(1668.88 5394.653)" fill="#ffd400" />
                                    <path id="Path_66" data-name="Path 66"
                                        d="M1684.661,5399.487a1.153,1.153,0,0,0-1.628,0l-7.1,7.1a1.15,1.15,0,0,0,0,1.628l7.1,7.1a1.151,1.151,0,0,0,1.628-1.628l-6.284-6.284,6.284-6.284A1.153,1.153,0,0,0,1684.661,5399.487Z"
                                        fill="#071156" />
                                </g>
                            </svg>
                        </div>

                        <span class="text-start">{{ item.q }}</span>
                    </button>

                    <div v-show="openIndex2 === i" class="px-4 py-3 text-sm" v-html="item.a">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>