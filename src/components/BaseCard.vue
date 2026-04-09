<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.base-card {
  background-color: #1e1a2e;
  border: 1px solid #2e2740;
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
}

.base-card:hover {
  border-color: #7c4fe0;
  transform: translateY(-2px);
}
</style>