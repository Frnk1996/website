<template>
  <div class="error">
    <h1 class="error__title" v-if="error.statusCode === 404">Page not found 😞</h1>
    <n-link class="error__link" to="/">Go to home page</n-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'clean'
}
</script>

<style>
.error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
}

.error__title {
  font-family: var(--primary-font-bold);
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  margin: 0 0 32px 0;
}

.error__link {
  text-decoration: underline;
  color: inherit;
  font-size: 16px;
  line-height: 32px;
  margin: 0;
}
</style>
