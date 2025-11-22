<script setup>
definePageMeta({
    layout: 'layout2'
})
</script>

<template>
    <section class="container grid grid-cols-12 my-12">
        <article class="col-span-4 pl-14 border-l-[3px] border-l-thwhite/5">
            <h1 class="text-thyellow text-[33px] font-medium">اراضی زکریا (زکریا)</h1>
            <span class="text-[21px] text-thwhite mt-2 font-medium">آپارتمان- موجود</span>
            <h3 class="text-[21px] text-thyellow font-medium mt-6">مشخصات ملک</h3>
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-y-2.5 mt-2.5 text-thwhite text-[21px] font-medium">
                    <span>مساحت کل:</span>
                    <span>تعداد کل واحدها:</span>
                    <span>استان:</span>
                    <span>شهر:</span>
                    <span>آدرس:</span>
                    <span>توضیحات:</span>
                </div>
                <div class="flex flex-col gap-y-2.5 mt-2.5 text-thwhite text-[21px] font-medium text-end">
                    <span>تست</span>
                    <span>تست</span>
                    <span>تست</span>
                    <span>تست</span>
                    <span>تست</span>
                    <span>تست</span>
                </div>
            </div>
            <div class="mt-12 flex items-center justify-between">
                <div class="flex flex-col items-center gap-y-4" v-for="i in 3">
                    <div class="relative size-[110px]">
                        <svg class="size-[110px]" xmlns="http://www.w3.org/2000/svg" width="109.311" height="109.311"
                            viewBox="0 0 109.311 109.311">
                            <g id="_45" data-name="45" transform="translate(-1612.967 -575.145)">
                                <g id="Group_141" data-name="Group 141">
                                    <g id="Group_140" data-name="Group 140">
                                        <g id="Group_137" data-name="Group 137">
                                            <path id="Path_18" data-name="Path 18"
                                                d="M1698.268,675.055q.522-.354,1.036-.719C1698.962,674.58,1698.616,674.818,1698.268,675.055Z"
                                                fill="#ffe164" />
                                        </g>
                                        <g id="Group_138" data-name="Group 138">
                                            <path id="Path_19" data-name="Path 19" d="M1698.2,675.1l.069-.046Z"
                                                fill="#ffe164" />
                                        </g>
                                        <g id="Group_139" data-name="Group 139">
                                            <path id="Path_20" data-name="Path 20"
                                                d="M1667.622,575.145v12.422a42.233,42.233,0,1,1-21.119,78.814l-6.208,10.754q-1.667-.965-3.249-2.034a54.655,54.655,0,1,0,30.576-99.956Z"
                                                fill="#ffd400" />
                                        </g>
                                    </g>
                                </g>
                                <g id="Group_143" data-name="Group 143">
                                    <g id="Group_142" data-name="Group 142">
                                        <path id="Path_21" data-name="Path 21"
                                            d="M1625.389,629.8a42.232,42.232,0,0,1,42.233-42.233V575.145a54.656,54.656,0,0,0-27.327,101.99l6.208-10.754A42.216,42.216,0,0,1,1625.389,629.8Z"
                                            fill="#fff" fill-rule="evenodd" opacity="0.05" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div
                            class="flex flex-col items-center text-xl font-medium text-thwhite absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                            <span v-auto-persian-number>8569</span>
                        </div>
                    </div>
                    <span class="text-thwhite font-medium text-[13px]">حجم معاملات (واحد) </span>
                </div>
            </div>
            <div class="mt-12.5">
                <nuxt-img class="w-full rounded-[22.5px]" src="/images/11.png"></nuxt-img>
            </div>
        </article>
        <article class="col-span-8 pr-14">
            <div class="grid grid-cols-2 gap-7">
                <div>
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col gap-y-2.5">
                            <span class="text-[21.78px] text-thyellow font-medium">قیمت پایانی:</span>
                            <span class="text-[21.78px] text-thyellow font-medium">حجم:</span>
                        </div>
                        <div class="flex flex-col gap-y-2.5">
                            <span class="text-3xl text-thwhite font-medium" v-auto-persian-number>5,586,943 ریال</span>
                            <span class="text-[21.78px] text-thwhite font-medium" v-auto-persian-number>3,286,896</span>
                        </div>
                    </div>
                    <div class="mt-4 rounded-[6.7px] bg-thwhite/5 p-7">
                        <div class="flex items-center justify-between">
                            <span v-auto-persian-number class="text-thwhite font-medium">59300</span>
                            <span v-auto-persian-number class="text-thwhite font-medium">59300</span>
                            <span v-auto-persian-number class="text-thwhite font-medium">59300</span>
                        </div>
                        <div class="relative">
                            <div class="size-2 rounded-full bg-thwhite absolute left-0 z-20 top-1/2 -translate-y-1/2">
                            </div>
                            <div class="w-full h-0.5 bg-thwhite mt-3"></div>
                            <div class="size-2 rounded-full bg-thwhite absolute right-0 z-20 top-1/2 -translate-y-1/2">
                            </div>
                            <div
                                class="size-4 rounded-full bg-transparent absolute right-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 border-2 border-thwhite flex justify-center items-center cursor-pointer">
                                <div class="size-2 rounded-full bg-thyellow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-7 mt-4.5">
                        <div class="flex flex-col items-center w-full">
                            <div class="bg-thwhite/5 rounded-t-[6.7px] w-full py-2 flex flex-col items-center">
                                <span class="text-lg text-thwhite font-medium">بهترین خرید</span>
                                <span class="text-[23px] text-thgreen font-medium" v-auto-persian-number>35,622</span>
                            </div>
                            <button
                                class="bg-thgreen rounded-b-[6.7px] w-full py-2 text-thwhite text-[21.78px] font-medium">فروش</button>
                        </div>
                        <div class="flex flex-col items-center w-full">
                            <div class="bg-thwhite/5 rounded-t-[6.7px] w-full py-2 flex flex-col items-center">
                                <span class="text-lg text-thwhite font-medium">بهترین فروش</span>
                                <span class="text-[23px] text-thred font-medium" v-auto-persian-number>35,622</span>
                            </div>
                            <button
                                class="bg-thred rounded-b-[6.7px] w-full py-2 text-thwhite text-[21.78px] font-medium">فروش</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">

                        <div class="flex flex-col items-center">
                            <div class="rounded-[6.7px] bg-thwhite/5 py-1.5 px-3.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.902" height="18.122"
                                    viewBox="0 0 17.902 18.122">
                                    <g id="Group_186" data-name="Group 186" transform="translate(-577.779 -499.274)"
                                        opacity="0.8">
                                        <path id="Path_87" data-name="Path 87"
                                            d="M595.528,504.063c-.529.331-1.384-.973-1.775-1.253-.7.5-4.837,4.921-5.2,4.924-.45,0-3.431-4.286-4.042-4.806l-5.339,4.251c-.393.1-1.178-1.1-1.4-1.447-.016-.181.469-.591.622-.727,1.636-1.45,3.995-3.354,5.772-4.618.564-.4.622-.54,1.153-.005,1.1,1.106,2.022,2.87,3.113,3.93.091.088.183.246.333.219l3.294-3.19c.124-.478-2.15-1.746-.85-1.993a27.669,27.669,0,0,1,3.928-.009.528.528,0,0,1,.41.168A18.64,18.64,0,0,1,595.528,504.063Z"
                                            fill="#fff" />
                                        <path id="Path_88" data-name="Path 88"
                                            d="M594.388,517.241c-.073.115-2.606.439-2.4-.433.069-3.37-.168-6.775-.031-10.137a2.069,2.069,0,0,1,.291-1.207h1.963l.173.173Z"
                                            fill="#fff" />
                                        <rect id="Rectangle_37" data-name="Rectangle 37" width="2.361" height="11.898"
                                            transform="translate(583.021 505.464)" fill="#fff" />
                                        <path id="Path_89" data-name="Path 89"
                                            d="M589.885,517.241c-.068.106-2.322.343-2.374-.221.056-2.324-.247-4.937-.055-7.231a1.256,1.256,0,0,1,.293-.861h1.963l.173.173Z"
                                            fill="#fff" />
                                        <rect id="Rectangle_38" data-name="Rectangle 38" width="2.4" height="8.55"
                                            transform="translate(578.479 508.812)" fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-thyellow text-sm mt-1.5">جزئیات</span>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="rounded-[6.7px] bg-thwhite/5 py-1.5 px-3.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.035" height="18.258"
                                    viewBox="0 0 21.035 18.258">
                                    <g id="Group_184" data-name="Group 184" transform="translate(-408.868 -499.206)"
                                        opacity="0.8">
                                        <path id="Path_86" data-name="Path 86"
                                            d="M411.665,511.517a2.931,2.931,0,0,1-1.6-1.647,43.31,43.31,0,0,1-1.193-6.33c-.008-.289,0-.479.251-.661l16.706-1.117c.044-.47.208-2.289.616-2.483a20.556,20.556,0,0,1,3.076-.029.65.65,0,0,1,.323.89c-.306.683-2.41,0-2.57.477l-2.233,12.608a2.247,2.247,0,1,1-3.065,1.035H415.88a2.262,2.262,0,1,1-2.187-1.325l9.856.005c.395-.074.276-1.075.456-1.423Zm13.863-8.429-3.25.2-.2,1.93,3.053-.145Zm-7.21.406v1.828l2.946-.1.2-1.827Zm-.813.1a21.675,21.675,0,0,0-3.454.255l.2,1.573,3.25-.1Zm-7.008,1.929h2.793c.1-.072.129-.1.133-.228a13.9,13.9,0,0,1-.183-1.5l-2.946.2Zm14.27.508c-.88.018-1.761-.013-2.641,0-.2,0-.2,1.466-.254,1.727l2.839-.107.307-1.571C424.861,505.834,424.807,506.032,424.767,506.033Zm-3.606.1h-2.589c-.034,0-.155.134-.254.1v1.524h2.59A4.728,4.728,0,0,0,421.161,506.135Zm-3.656.1-3.148.1.2,1.521,2.944-.1Zm-6.449,1.625h2.691l-.2-1.522-2.842.1Zm9.9.711h-2.386c-.034,0-.155.135-.254.1v1.472a7.181,7.181,0,0,0,2.427.142Zm3.555,0h-2.742l-.1,1.727h2.539Zm-12.34,1.727c.495.088,1.2-.065,1.727,0,.266,0-.16-1.381-.05-1.626l-2.743.1C411.21,509.354,411.515,510.182,412.173,510.3Zm5.332-1.625h-2.843l.2,1.624c.713-.089,1.712.124,2.385,0a.328.328,0,0,0,.254-.153Zm-2.724,6.532a.963.963,0,1,0-.962.962A.962.962,0,0,0,414.781,515.206Zm10.19,0a.96.96,0,1,0-.96.96A.96.96,0,0,0,424.971,515.2Z"
                                            fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-thyellow text-sm mt-1.5">سفارش‌ها</span>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="rounded-[6.7px] bg-thwhite/5 py-1.5 px-3.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.279" height="20.946"
                                    viewBox="0 0 23.279 20.946">
                                    <g id="Group_182" data-name="Group 182" transform="translate(-235.036 -498.099)"
                                        opacity="0.8">
                                        <path id="Path_82" data-name="Path 82"
                                            d="M235.036,514.037V500.19a2.378,2.378,0,0,1,2.126-2.09h19a2.361,2.361,0,0,1,2.148,2.151v13.681a2.379,2.379,0,0,1-1.212,1.923c-.866.476-1.981.2-2.935.272l-.072.023-1.684,2.9-5.085-2.916h-10.19A2.373,2.373,0,0,1,235.036,514.037Zm21.544.356V499.87l-.035-.036H236.794v14.559h11.033l4.026,2.328,1.342-2.328Z"
                                            fill="#fff" />
                                        <path id="Path_83" data-name="Path 83"
                                            d="M239.367,509.984a.965.965,0,0,1,.549-.247h13.518a.881.881,0,0,1-.12,1.758l-13.255,0A.893.893,0,0,1,239.367,509.984Z"
                                            fill="#fff" />
                                        <path id="Path_84" data-name="Path 84"
                                            d="M239.828,506.253l13.652-.006a.877.877,0,0,1,.024,1.734H239.846A.878.878,0,0,1,239.828,506.253Z"
                                            fill="#fff" />
                                        <path id="Path_85" data-name="Path 85"
                                            d="M239.367,503a.958.958,0,0,1,.549-.246H248.8a.875.875,0,0,1,.048,1.733h-9A.882.882,0,0,1,239.367,503Z"
                                            fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-thyellow text-sm mt-1.5">پیام‌ها</span>
                        </div>

                    </div>

                    <div class="mt-3.5 bg-thwhite/5 rounded-xl py-3 px-7 grid grid-cols-2">
                        <div class="w-full border-l-[3px] border-l-thwhite/10 pl-6">
                            <div class="bg-thgreen py-1 rounded-[5.23px] text-thwhite text-center">سفارشات خرید</div>
                            <div class="mt-1.5 flex items-center justify-between">
                                <span class="text-sm text-thwhite font-light flex-1">تعداد</span>
                                <span class="text-sm text-thwhite font-light flex-1">حجم</span>
                                <span class="text-sm text-thwhite font-light flex-2 text-end">قیمت</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex-1 flex flex-col mt-3.5 text-thwhite text-sm font-light items-start">
                                    <span v-auto-persian-number v-for="i in 8">2</span>
                                </div>
                                <div class="flex-1 flex flex-col mt-3.5 text-thwhite text-sm font-light items-start">
                                    <span v-auto-persian-number v-for="i in 8">6900</span>
                                </div>
                                <div class="flex-2 flex flex-col mt-3.5 text-thwhite text-sm font-light items-end">
                                    <span v-auto-persian-number v-for="i in 8">6900</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full pr-6">
                            <div class="bg-thred py-1 rounded-[5.23px] text-thwhite text-center">سفارشات فروش</div>
                            <div class="mt-1.5 flex items-center justify-between">
                                <span class="text-sm text-thwhite font-light flex-1">تعداد</span>
                                <span class="text-sm text-thwhite font-light flex-1">حجم</span>
                                <span class="text-sm text-thwhite font-light flex-2 text-end">قیمت</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex-1 flex flex-col mt-3.5 text-thwhite text-sm font-light items-start">
                                    <span v-auto-persian-number v-for="i in 8">2</span>
                                </div>
                                <div class="flex-1 flex flex-col mt-3.5 text-thwhite text-sm font-light items-start">
                                    <span v-auto-persian-number v-for="i in 8">6900</span>
                                </div>
                                <div class="flex-2 flex flex-col mt-3.5 text-thwhite text-sm font-light items-end">
                                    <span v-auto-persian-number v-for="i in 8">6900</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 w-full">
                <div class="px-5">
                    <button
                        class="text-thyellow text-sm bg-thwhite/5 px-4 py-2 rounded-t-md cursor-pointer font-light">پنل
                        معاملات</button>
                    <button class="text-thwhite text-sm px-4 py-2 rounded-md cursor-pointer font-light"
                        v-for="i in 4">سفارشات باز</button>
                </div>
                <div class="p-6 bg-thwhite/5 rounded-xl flex-col">
                    <div class="flex items-center">
                        <div class="border-l border-l-thwhite pl-6 flex flex-col justify-between">
                            <div class="flex items-center">
                                <button
                                    class="rounded-[7px] bg-thwhite/5 px-7.5 py-1.5 text-sm fnot-light text-thwhite cursor-pointer">خرید</button>
                                <span class="mr-4 text-sm text-thwhite font-light">قیمت واحد(ریال):</span>
                                <div class="flex flex-col relative">
                                    <input type="text"
                                        class="h-[33px] w-[171px] bg-thwhite/5 rounded-[3px] mr-1 outline-none text-thwhite px-2 text-sm">
                                    <span class="text-[10px] text-thwhite font-light absolute -bottom-4 right-1" v-auto-persian-number>بازه مجاز:
                                        2,596,000 -5,286,820</span>
                                </div>
                                <span class="mr-4 text-sm text-thwhite font-light">مبلغ کل(ریال):</span>
                                <input type="text"
                                    class="h-[33px] w-[171px] bg-thwhite/5 rounded-[3px] mr-1 outline-none text-thwhite px-2 text-sm">
                            </div>
                            <div class="flex items-center mt-6">
                                <button
                                    class="rounded-[7px] bg-thwhite/5 px-[25px] py-1.5 text-sm fnot-light text-thyellow border border-thyellow cursor-pointer">فروش</button>
                                <span class="mr-4 text-sm text-thwhite font-light mr-12.5">تعداد واحد:</span>
                                <div class="flex flex-col relative">
                                    <input type="text"
                                        class="h-[33px] w-[171px] bg-thwhite/5 rounded-[3px] mr-1 outline-none text-thwhite px-2 text-sm">
                                    <span class="text-[10px] text-thwhite font-light absolute -bottom-4 right-1" v-auto-persian-number>بازه مجاز:
                                        0-10</span>
                                </div>
                                <div class="flex mr-auto items-center">
                                    <button class="bg-transparent hover:bg-thwhite/5 rounded-[6.63px] p-1.5 text-sm font-light text-thwhite ml-9 cursor-pointer">انصراف</button>
                                    <button class="bg-thyellow rounded-[6.63px] p-1.5 text-sm font-light cursor-pointer">ثبت سفارش</button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="pr-6 flex flex-col items-start justify-between">
                            <div class="flex flex-col">
                                <span class="text-sm text-thwhite font-light">موجودی کیف پول:</span>
                                <span class="text-thyellow text-lg font-light" v-auto-persian-number>501,156,578
                                    ريال</span>
                            </div>
                            <div class="flex flex-col mt-6">
                                <span class="text-sm text-thwhite font-light">موجودی قابل استفاده:</span>
                                <span class="text-thyellow text-lg font-light" v-auto-persian-number>451,156,578
                                    ريال</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>