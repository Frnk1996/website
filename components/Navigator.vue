<template>
  <div>
    <nav class="navigator" v-bind:class="{ 'navigator--scrolled': scrolled }">
      <n-link class="navigator__title" to="/">Lars Klopstra</n-link>
      <button class="navigator__menu" v-on:click="openMenu()">Menu</button>
    </nav>
    <div class="scrim" :class="{'scrim--active': menuIsOpen}" v-on:click="closeMenu()"></div>
    <aside class="menu" :class="{'menu--open': menuIsOpen}">
      <a href="https://www.linkedin.com/in/lars-klopstra-3a2bb014a" target="_blank" class="menu__link">Linkedin</a>
      <a href="https://github.com/Larsklopstra" target="_blank" class="menu__link">GitHub</a>
      <a href="https://dev.to/larsklopstra" target="_blank" class="menu__link">Blog</a>
      <a href="https://www.instagram.com/larsklopstra" target="_blank" class="menu__link">Instagram</a>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      menuIsOpen: false
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 72
    },
    openMenu() {
      this.menuIsOpen = true
    },
    closeMenu() {
      this.menuIsOpen = false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.navigator {
  z-index: 24;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: transparent;
  transition: 500ms var(--fast-curve) background;
}

.navigator__title {
  color: inherit;
  font-family: var(--primary-font-bold);
  font-size: 20px;
  line-height: 36px;
  font-weight: bold;
  text-decoration: none;
}

.navigator__menu {
  color: inherit;
  font-family: var(--primary-font-bold);
  font-size: 20px;
  line-height: 36px;
  font-weight: bold;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}

.navigator--scrolled {
  background: var(--light-color);
}

.menu {
  z-index: 28;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 64px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  height: 100vh;
  background: var(--light-color);
  visibility: hidden;
  transform: translateX(100%);
  transition-property: transform, visibility;
  transition: 500ms var(--fast-curve);
}

.menu__link {
  position: relative;
  z-index: 2;
  color: inherit;
  font-family: var(--primary-font-bold);
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 32px 0;
}

.menu__link::before {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  z-index: -1;
  content: '';
  width: 100%;
  height: 4px;
  background: var(--dark-color);
  transform-origin: 0 0;
  transform: scaleX(0);
  transition-property: transform;
  transition: 500ms var(--fast-curve);
}

.menu__link:focus::before,
.menu__link:hover::before,
.menu__link:active::before {
  transform: scaleX(1);
}

.menu--open {
  visibility: visible;
  transform: translateX(0);
}

.scrim {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 26;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.64);
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility;
  transition: 500ms var(--fast-curve);
}

.scrim--active {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 620px) {
  .menu {
    width: 280px;
  }

  .menu__link {
    color: inherit;
    font-family: var(--primary-font-bold);
    font-size: 20px;
    line-height: 38px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    margin: 0 0 32px 0;
  }
}
</style>
