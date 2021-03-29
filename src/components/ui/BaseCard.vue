<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  max-width: 30rem;
  margin: 1vmin auto;
  padding: 2vmin 3vmin;

  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
