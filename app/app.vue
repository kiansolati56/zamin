<template>
  <client-only>
    <GlobalPreloader :show="!isFullyLoaded" />
  </client-only>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import GlobalPreloader from '~/components/AppLoader.vue';
import { isFullyLoaded, stopLoader } from '~/composables/useLoader';

import { useNuxtApp } from "#app"; // Adjust path if necessary


const loadImage = (imgElement) => {
  return new Promise((resolve) => { // Simplified resolve for brevity, see previous answer for full error handling
    if (!imgElement) {
      resolve();
      return;
    }
    if (imgElement.complete && imgElement.naturalHeight !== 0) {
      resolve();
    } else {
      imgElement.addEventListener('load', resolve);
      imgElement.addEventListener('error', () => {
        console.warn('Image failed to load:', imgElement.src);
        resolve(); // Resolve even on error
      });
    }
  });
};

onMounted(async () => {
  if (process.client) {
    try {
      const promises = [];

      if (document.fonts) {
        promises.push(document.fonts.ready.catch(err => console.warn('Font loading error:', err)));
      }

      await nextTick(); // Ensure DOM elements are available for query

      const criticalImageSelectors = ['#site-logo', '.hero-banner-image']; // Example selectors
      criticalImageSelectors.forEach(selector => {
        const imgEl = document.querySelector(selector);
        if (imgEl) {
          promises.push(loadImage(imgEl));
        }
      });

      if (promises.length === 0) {
        stopLoader();
        return;
      }

      await Promise.allSettled(promises);

    } catch (error) {
      console.error('Error during preloading assets:', error);
    } finally {
      stopLoader();
    }
  } else {
  }
});

const nuxtApp = useNuxtApp();
// nuxtApp.hooks.hook('page:start', () => {
//   isFullyLoaded.value = false;
// })
nuxtApp.hooks.hook('page:finish', () => {
  stopLoader();
})
nuxtApp.hooks.hook('page:error', () => {
  stopLoader();
})

</script>