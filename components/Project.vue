<template>
  <div class="page">
    <header class="hero" :style="{background: color}">
      <h1 class="hero__title">{{title}}</h1>
    </header>
    <div class="container">
      <section class="information">
        <div class="information__column">
          <div class="information__list-item" v-if="client">
            <p class="information__list-item__title">Client</p>
            <p class="information__list-item__text">{{client}}</p>
          </div>
          <div class="information__list-item">
            <p class="information__list-item__title">Visit</p>
            <a
              :href="link"
              target="_blank"
              class="information__list-item__text information__list-item__text--link"
            >{{link}}</a>
          </div>
          <div class="information__list-item">
            <p class="information__list-item__title">Type</p>
            <p class="information__list-item__text">{{type}}</p>
          </div>
          <div class="information__list-item">
            <p class="information__list-item__title">Technologies</p>
            <p class="information__list-item__text">{{technologies}}</p>
          </div>
          <div class="information__list-item">
            <p class="information__list-item__title">Date</p>
            <p class="information__list-item__text">{{date}}</p>
          </div>
        </div>
        <div class="information__column">
          <p class="information__about">{{about}}</p>
        </div>
      </section>
      <img
        v-if="image"
        :src="image"
        :alt="imageAlt"
        class="image"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'about', 'color', 'date', 'technologies', 'type', 'client', 'link', 'image', 'imageAlt']
}
</script>

<style>
.information {
  padding: 64px 0;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.information__list-item {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
}

.information__list-item__title {
  font-family: var(--primary-font-bold);
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
  margin: 0;
}

.information__list-item__text {
  font-size: 16px;
  line-height: 32px;
  font-weight: normal;
  margin: 0;
}

.information__list-item__text--link {
  color: inherit;
  text-decoration: underline;
  word-break: break-all;
}

.information__about {
  font-size: 24px;
  line-height: 40px;
  font-weight: normal;
  margin: 0;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  background: #eee;
  margin-bottom: 64px;
}

@media (max-width: 620px) {
  .information {
    padding: 16px 0;
    grid-template-columns: 1fr;
  }

  .information__about {
    font-size: 16px;
    line-height: 30px;
  }

  .image {
    margin-bottom: 16px;
  }
}
</style>
