<script setup>
import { startLoader } from '~/composables/useLoader';
const props = defineProps({
  to: {
    type: String,
    required: true
  }
});

const route = useRoute();

const handleClick = () => {
  // 1. Explicitly check for hash links and do nothing.
  if (props.to.startsWith('#')) {
    return;
  }

  // 2. Otherwise, check if the link's path is different from the current route's path.
  //    If it is, it's a new navigation, so we start the loader.
  if (route.path !== props.to) {
    startLoader();
  }
};
</script>

<template>
   <NuxtLink :to="to" @click="handleClick">
    <slot />
   </NuxtLink>
</template>