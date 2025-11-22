<template>
    <div class="grid grid-cols-12 lg:gap-15 container py-25">
        <div class="col-span-full lg:col-span-4">
            <LoaderLink to="/" class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="53.386" height="54.792" viewBox="0 0 53.386 54.792">
                    <g id="Group_13" data-name="Group 13" transform="translate(-1680.268 -31.776)">
                        <g id="Group_12" data-name="Group 12">
                            <g id="Group_11" data-name="Group 11">
                                <path id="Path_8" data-name="Path 8"
                                    d="M1706.961,32.479h-22.4a4.292,4.292,0,0,0-4.292,4.292v22.4a26.693,26.693,0,0,0,26.693,26.693h22.4a4.292,4.292,0,0,0,4.292-4.292v-22.4A26.693,26.693,0,0,0,1706.961,32.479Z"
                                    fill="#ffd400" />
                                <g id="Group_10" data-name="Group 10">
                                    <path id="Path_9" data-name="Path 9"
                                        d="M1724.944,33.02V45.207a1.243,1.243,0,0,1-1.243,1.244h-4.852a28.655,28.655,0,0,0-27.434,20.389,1.252,1.252,0,0,1-1.194.9h0a1.252,1.252,0,0,1-1.243-1.307,35.991,35.991,0,0,1,34.66-34.66A1.251,1.251,0,0,1,1724.944,33.02Z"
                                        fill="#191970" />
                                    <path id="Path_10" data-name="Path 10"
                                        d="M1688.977,85.324V73.137a1.244,1.244,0,0,1,1.244-1.244h4.852A28.655,28.655,0,0,0,1722.507,51.5a1.251,1.251,0,0,1,1.194-.9h0a1.252,1.252,0,0,1,1.243,1.307,35.992,35.992,0,0,1-34.66,34.66A1.252,1.252,0,0,1,1688.977,85.324Z"
                                        fill="#191970" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="flex flex-col gap-1.5 mb-4">
                    <span class="text-[32px] text-thblue font-medium">ضمین</span>
                    <small class="text-xs text-thblue font-medium">پلتفرم واگذاری انبوه سهام اراضی</small>
                </div>
            </LoaderLink>
            <p class="text-[17px] text-thblue text-justify mt-5">
                در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان دلخواه مشارکت کرده و سود پیش‌بینی شده
                حاصل از آن را در بازه‌های زمانی مشخص دریافت کنند و همچنین در مسیر توسعه اقتصادی نقش آفرینی کنند. از سوی
                دیگر، صاحبان کسب‌وکار این امکان را دارند که برای توسعه فعالیت‌ها و اجرای طرح‌های خود، سرمایه نمایند.
            </p>
        </div>

        <div class="col-span-5 hidden lg:flex justify-between items-center">
            <ul class="flex flex-col gap-5 text-[17px] text-thblue" v-for="i in 3">
                <li>
                    <LoaderLink>سرمایه‌گذاری</LoaderLink>
                </li>
                <li>
                    <LoaderLink>اخبار و رسانه</LoaderLink>
                </li>
                <li>
                    <LoaderLink>درباره ما</LoaderLink>
                </li>
                <li>
                    <LoaderLink>ارتباط با ما</LoaderLink>
                </li>
            </ul>
        </div>

        <div class="col-span-full lg:col-span-3 flex flex-col sm:flex-row items-center justify-between mt-10 lg:mt-0">
            <div class="flex items-center">
                <nuxt-img src="/images/7.png" class="w-[143px] h-auto mt-8"></nuxt-img>
                <nuxt-img src="/images/6.png" class="w-[143px] h-auto"></nuxt-img>
            </div>
            <div class="mt-10 mr-5 order-last sm:order-first lg:order-last">
                <h3 class="text-[17px] text-thblue">با ما در ارتباط باشید</h3>
                <ul class="mt-5 flex items-center gap-8">
                    <li v-for="i in 3">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29.341" height="23.805"
                                viewBox="0 0 29.341 23.805">
                                <path id="Path_74" data-name="Path 74"
                                    d="M346.43,5855.992c-.53,3.352-1.819,7.918-2.632,11.4-.23.985.26,2.134-.438,3.473-1.978,3.793-5.22-.1-8.335.036v-.878a7.244,7.244,0,0,0-.877-.877c-1.683-1.789-5.619-3.351-3.509-6.141a6.249,6.249,0,0,0,2.2-.827c1.312-.795,4.721-4.514,5.248-6.2l-10.958,7.026a6.877,6.877,0,0,1-3.006.973c-3.2,0-8.654-1.16-5.767-5.359,3.471.147,15.363-5.444,19.476-7.1.6-.244.625-1.333,1.383-1.593C347.18,5847.2,347.517,5849.107,346.43,5855.992Z"
                                    transform="translate(-317.54 -5848.73)" fill="#071156" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg-thyellow py-[18px] text-[15px] text-thblue text-center">
        در این بستر، سرمایه‌گذاران می‌توانند به‌صورت انتخابی و به میزان ؟ش
    </div>
</template>