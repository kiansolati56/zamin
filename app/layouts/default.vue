<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

useHead({
    bodyAttrs: {
        class: 'relative min-h-screen font-iranyekan',
        dir: 'rtl',
    }
});


</script>

<template>
    <header class="shadow-lg bg-thwhite">
        <AppHeader />
    </header>
    <main class="lg:mt-32">
        <div>
            <slot></slot>
        </div>
    </main>
    <footer>
        <AppFooter />
    </footer>
</template>