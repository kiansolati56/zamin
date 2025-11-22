<script setup>
const menuItems = ref([
    { title: 'صفحه اصلی', slug: '/' },
    { title: 'سرمایه‌گذاری', slug: '/investment' },
    { title: 'اخبار', slug: '/news' },
    { title: 'درباره ما', slug: '/about-us' },
    { title: 'تماس با ما', slug: '/contact-us' }
])
</script>

<template>
    <div class="grid grid-cols-12 container py-6">
        <div class="col-span-7 xl:col-span-3 flex justify-start items-center">
            <LoaderLink to="/" class="flex items-center gap-2">
                <svg class="size-8 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="53.386" height="54.792" viewBox="0 0 53.386 54.792">
                    <g id="Group_8" data-name="Group 8" transform="translate(-1680.268 -31.776)">
                        <path id="Path_14" data-name="Path 14"
                            d="M1706.961,32.479h-22.4a4.292,4.292,0,0,0-4.292,4.292v22.4a26.693,26.693,0,0,0,26.693,26.693h22.4a4.292,4.292,0,0,0,4.292-4.292v-22.4A26.693,26.693,0,0,0,1706.961,32.479Z"
                            fill="#fff" />
                        <g id="Group_7" data-name="Group 7">
                            <path id="Path_15" data-name="Path 15"
                                d="M1724.944,33.02V45.207a1.243,1.243,0,0,1-1.243,1.244h-4.852a28.655,28.655,0,0,0-27.434,20.389,1.252,1.252,0,0,1-1.194.9h0a1.252,1.252,0,0,1-1.243-1.307,35.991,35.991,0,0,1,34.66-34.66A1.251,1.251,0,0,1,1724.944,33.02Z"
                                fill="#ffd400" />
                            <path id="Path_16" data-name="Path 16"
                                d="M1688.977,85.324V73.137a1.244,1.244,0,0,1,1.244-1.244h4.852A28.655,28.655,0,0,0,1722.507,51.5a1.251,1.251,0,0,1,1.194-.9h0a1.252,1.252,0,0,1,1.243,1.307,35.992,35.992,0,0,1-34.66,34.66A1.252,1.252,0,0,1,1688.977,85.324Z"
                                fill="#ffd400" />
                        </g>
                    </g>
                </svg>
                <div class="flex flex-col gap-1.5 md:mb-4">
                    <span class="text-lg md:text-[32px] text-thwhite font-medium">ضمین</span>
                    <small class="text-[9px] sm:text-xs text-thwhite font-medium">پلتفرم واگذاری انبوه سهام اراضی</small>
                </div>
            </LoaderLink>
        </div>

        <ul class="col-span-6 hidden xl:flex justify-center items-center">
            <li v-for="(item, index) in menuItems"
                :class="{ 'border-l border-thyellow': index !== menuItems.length - 1 }">
                <LoaderLink :to="item.slug" class="2xl:text-xl font-medium text-thwhite px-[21px]">
                    {{ item.title }}
                </LoaderLink>
            </li>
        </ul>

        <div class="col-span-5 xl:col-span-3 flex justify-end items-center gap-2 md:gap-5">
            <LoaderLink to="/login" class="py-2 px-4 rounded-[8.45px] bg-thyellow text-xl text-thwhite hidden md:block">
                ثبت نام
            </LoaderLink>

            <button class="hover:bg-thgray-100 p-2 rounded-lg cursor-pointer">
                <svg class="size-5 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="24.937" height="27.715"
                    viewBox="0 0 24.937 27.715">
                    <g id="Group_8" data-name="Group 8" transform="translate(-336.408 -45.069)">
                        <path id="Path_4" data-name="Path 4"
                            d="M337.76,72.784a1.352,1.352,0,0,0,1.352-1.352V68.653a4.206,4.206,0,0,1,4.206-4.206h11.116a4.208,4.208,0,0,1,4.207,4.206v2.779a1.352,1.352,0,0,0,2.7,0V68.653a6.912,6.912,0,0,0-6.911-6.91H343.318a6.91,6.91,0,0,0-6.91,6.91v2.779A1.352,1.352,0,0,0,337.76,72.784Z"
                            fill="#FFD400" />
                        <path id="Path_5" data-name="Path 5"
                            d="M348.876,58.889a6.91,6.91,0,1,0-6.91-6.91A6.917,6.917,0,0,0,348.876,58.889Zm0-11.116a4.206,4.206,0,1,1-4.206,4.206A4.211,4.211,0,0,1,348.876,47.773Z"
                            fill="#FFD400" />
                    </g>
                </svg>
            </button>

            <button class="hover:bg-thgray-100 p-2 rounded-lg cursor-pointer">
                <svg class="size-5 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="27.581" height="20.238"
                    viewBox="0 0 27.581 20.238">
                    <g id="Group_9" data-name="Group 9" transform="translate(-287.378 -49.504)">
                        <path id="Path_6" data-name="Path 6"
                            d="M297.711,60.378h-6.6a1.082,1.082,0,0,0-1.082,1.081v5.01a1.083,1.083,0,0,0,1.082,1.082h8.027a1.081,1.081,0,0,1,1.082,1.081v.029a1.081,1.081,0,0,1-1.082,1.081H288.46a1.081,1.081,0,0,1-1.082-1.081V50.586A1.082,1.082,0,0,1,288.46,49.5h10.531a1.082,1.082,0,0,1,1.082,1.082v.028a1.081,1.081,0,0,1-1.082,1.082h-7.884a1.082,1.082,0,0,0-1.082,1.082v4.354a1.082,1.082,0,0,0,1.082,1.082h6.6a1.081,1.081,0,0,1,1.081,1.082h0A1.082,1.082,0,0,1,297.711,60.378Z"
                            fill="#FFD400" />
                        <path id="Path_7" data-name="Path 7"
                            d="M304.533,54.713a1.081,1.081,0,0,1,1.08,1.033l.038.846a5.642,5.642,0,0,1,1.979-1.623,5.742,5.742,0,0,1,2.519-.541,5.308,5.308,0,0,1,2.647.6,3.866,3.866,0,0,1,1.609,1.793,7.1,7.1,0,0,1,.554,2.989v8.853a1.081,1.081,0,0,1-1.082,1.081h-.4a1.082,1.082,0,0,1-1.082-1.081V59.78a3.471,3.471,0,0,0-.754-2.391,2.977,2.977,0,0,0-2.262-.769,3.861,3.861,0,0,0-2.206.641,4.046,4.046,0,0,0-1.349,1.534,1.132,1.132,0,0,0-.118.512v9.354a1.081,1.081,0,0,1-1.081,1.081H304.2a1.081,1.081,0,0,1-1.082-1.081V55.795a1.081,1.081,0,0,1,1.082-1.082Z"
                            fill="#FFD400" />
                    </g>
                </svg>
            </button>

            <button class="hover:bg-thgray-100 p-2 rounded-lg cursor-pointer">
                <svg class="size-5 md:size-auto" xmlns="http://www.w3.org/2000/svg" width="31.32" height="31.322"
                    viewBox="0 0 31.32 31.322">
                    <g id="Group_15" data-name="Group 15" transform="translate(-231.399 -44.699)">
                        <g id="Group_14" data-name="Group 14">
                            <path id="Path_11" data-name="Path 11"
                                d="M246.214,51.951a8.448,8.448,0,1,1-7.268,10.762A8.465,8.465,0,0,1,246.214,51.951Zm.225,2.409a6.032,6.032,0,1,0,5.846,9.008A6.051,6.051,0,0,0,246.439,54.36Z"
                                fill="#FFD400" />
                            <path id="Path_12" data-name="Path 12"
                                d="M238.3,67.685a1.224,1.224,0,0,1,1.288,1.815,27.857,27.857,0,0,1-2.146,2.146,1.229,1.229,0,0,1-1.672-1.671,26.051,26.051,0,0,1,2.059-2.083A1.2,1.2,0,0,1,238.3,67.685Z"
                                fill="#FFD400" />
                            <path id="Path_13" data-name="Path 13"
                                d="M255.32,67.684a1.272,1.272,0,0,1,.921.174,26.1,26.1,0,0,1,2.07,2.071,1.227,1.227,0,0,1-1.641,1.717,27.571,27.571,0,0,1-2.117-2.1A1.236,1.236,0,0,1,255.32,67.684Z"
                                fill="#FFD400" />
                            <path id="Path_14" data-name="Path 14"
                                d="M236.647,48.934a1.168,1.168,0,0,1,.844.174,26.266,26.266,0,0,1,2.07,2.071A1.226,1.226,0,0,1,237.92,52.9a27.4,27.4,0,0,1-2.117-2.1A1.222,1.222,0,0,1,236.647,48.934Z"
                                fill="#FFD400" />
                            <path id="Path_15" data-name="Path 15"
                                d="M246.812,44.718a1.209,1.209,0,0,1,1.45,1.073,16.137,16.137,0,0,1-.033,2.828,1.213,1.213,0,0,1-2.377-.192,16.234,16.234,0,0,1,.034-2.828A1.224,1.224,0,0,1,246.812,44.718Z"
                                fill="#FFD400" />
                            <path id="Path_16" data-name="Path 16"
                                d="M232.354,59.176a16.588,16.588,0,0,1,2.7-.022,1.211,1.211,0,0,1,.141,2.407,17.2,17.2,0,0,1-2.705.006A1.213,1.213,0,0,1,232.354,59.176Z"
                                fill="#FFD400" />
                            <path id="Path_17" data-name="Path 17"
                                d="M258.86,59.176a16.589,16.589,0,0,1,2.7-.022,1.211,1.211,0,0,1,.141,2.407,17.2,17.2,0,0,1-2.7.006A1.213,1.213,0,0,1,258.86,59.176Z"
                                fill="#FFD400" />
                            <path id="Path_18" data-name="Path 18"
                                d="M246.812,71.224a1.209,1.209,0,0,1,1.45,1.073,16.147,16.147,0,0,1-.033,2.829,1.213,1.213,0,0,1-2.377-.193,16.234,16.234,0,0,1,.034-2.828A1.224,1.224,0,0,1,246.812,71.224Z"
                                fill="#FFD400" />
                            <path id="Path_19" data-name="Path 19"
                                d="M257.053,48.934c1.075-.17,1.633.814,1.318,1.77l-2.13,2.162a1.223,1.223,0,0,1-1.744-1.593,25.727,25.727,0,0,1,2.085-2.131A1.208,1.208,0,0,1,257.053,48.934Z"
                                fill="#FFD400" />
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>