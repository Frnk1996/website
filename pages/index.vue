<template>
  <div class="page">
    <header class="hero">
      <div class="container">
        <h1
          class="hero__title"
        >Hi there, I'm a software developer specialized in fast and good looking progressive web applications.</h1>
      </div>
      <span class="hero__menu-highlight"></span>
    </header>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Projects</h2>
        <project-item
          title="Crypto Tracker"
          link="/projects/crypto-tracker"
          color="#61cac9"
          date="25/01/2019"
        />
        <project-item
          title="Birb.js"
          link="/projects/birb-js"
          color="#01ffa3"
          date="29/12/2018"
        />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">About me</h2>
        <p class="section__paragraph">
          Hello there, my name is Lars Klopstra, I'm a software developer specialized in fast and good looking progressive web applications.
          I strive to create awesome web applications with Vue.js, Nuxt.js, Angular, Laravel, Node.js. I'm always looking to expand my knowledge,
          currently I'm looking into Django and realtime data with P2P and websockets.
        </p>
        <p class="section__paragraph">
          I don't have much working experience yet but I'm always open for awesome opportunities, my current working place is
          <a
            href="https://beeproger.com"
            target="_blank"
          >beeproger</a>,
          as an intern I help developing web applications with Angular and Laravel.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem'

export default {
  components: {
    ProjectItem
  }
}
</script>

<style>
.hero__menu-highlight {
  z-index: -4;
  display: block;
  position: absolute;
  top: -240px;
  right: -240px;
  width: 480px;
  height: 480px;
  background: linear-gradient(45deg, #ff004b, #ef00ff);
  border-radius: 50%;
}

.section {
  display: block;
  width: 100%;
  height: auto;
  padding: 64px 0 0 0;
  background: var(--dark-color);
}

.section:last-child {
  padding-bottom: 64px;
}

.section__title {
  color: var(--text-primary-light-color);
  font-family: var(--primary-font-bold);
  font-size: 40px;
  line-height: 56px;
  font-weight: bold;
  margin: 0 0 16px 0;
}

.section__paragraph {
  color: var(--text-secondary-light-color);
  font-size: 20px;
  line-height: 36px;
  font-weight: normal;
  margin: 0 0 16px 0;
}

.section__paragraph a {
  color: var(--text-primary-light-color);
  text-decoration: underline;
}

@media (max-width: 620px) {
  .section {
    padding: 16px 0 0 0;
  }

  .section:last-child {
    padding-bottom: 16px;
  }

  .section__title {
    font-size: 20px;
    line-height: 36px;
  }

  .section__paragraph {
    font-size: 16px;
    line-height: 32px;
  }

  .hero__menu-highlight {
    z-index: -4;
    display: block;
    position: absolute;
    top: -240px;
    right: -240px;
    width: 480px;
    height: 480px;
    background: linear-gradient(45deg, #ff004b, #ef00ff);
    border-radius: 50%;
  }
}
</style>
