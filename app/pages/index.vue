<script setup lang="ts">
defineRouteRules({
  prerender: true,
});

const { locale } = useI18n();
</script>

<template>
  <main>
    <p>The current locale is {{ locale }}.</p>
  </main>
</template>
