<script setup>
defineProps({
    show: Boolean,
});
</script>

<template>
    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-500 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="fixed inset-0 h-screen bg-thwhite flex flex-col justify-center items-center z-99999"
            aria-live="assertive" role="status">
            <div class="flex justify-center items-center flex-col gap-8">
                <div class="flex justify-center items-center gap-4 pr-8 -mt-3">
                    <div class="inline-flex items-center justify-center">
                        <svg class="g-spinner" viewBox="22 22 44 44" aria-label="loading">
                            <circle class="g-track" cx="44" cy="44" r="20" fill="none" stroke="#fff" stroke-width="4" />
                            <circle class="g-path" cx="44" cy="44" r="20" fill="none" stroke="#E66A32" stroke-width="4"
                                stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.g-spinner {
    width: 40px;
    height: 40px;
    animation: g-rotate 1.4s linear infinite;
}

.g-path {
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0;
    animation: g-dash 1.4s ease-in-out infinite;
    transform-origin: center;
}

@keyframes g-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes g-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 100, 200;
        stroke-dashoffset: -15px;
    }

    100% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: -125px;
    }
}
</style>