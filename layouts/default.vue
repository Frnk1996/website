<template>
  <div>
    <navigator />
    <nuxt />
    <footer class="footer">
      <a href="mailto:larsklopstra@gmail.com" class="footer__contact">larsklopstra@gmail.com</a>
    </footer>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'

export default {
  components: {
    Navigator
  }
}
</script>
