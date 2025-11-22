<script setup>
import AppHeader from "~/components/AppHeader2.vue";

useHead({
    bodyAttrs: {
        class: 'relative min-h-screen font-iranyekan bg-thblue',
        dir: 'rtl',
    }
});


</script>

<template>
    <header class="shadow-lg bg-thblue">
        <AppHeader />
    </header>
    <main class="relative">
        <div>
            <slot></slot>
        </div>
    </main>
</template>