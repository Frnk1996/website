<template>
  <n-link class="project-item" :to="link">
    <span class="project-item__background" :style="{background: color}"></span>
    <p class="project-item__date">{{ date }}</p>
    <p class="project-item__title">{{ title }}</p>
  </n-link>
</template>

<script>
export default {
  props: ['title', 'date', 'color', 'link']
}
</script>

<style>
.project-item {
  color: var(--text-secondary-light-color);
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 96px;
}

.project-item__background {
  display: block;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transform-origin: center bottom;
  transform: scale(0.9, 0);
  transition: transform var(--fast-curve) 500ms;
}

.project-item__date {
  font-size: 16px;
  line-height: 32px;
  font-weight: normal;
  margin: 0 32px 0 0;
}

.project-item__title {
  font-family: var(--primary-font-bold);
  font-size: 20px;
  line-height: 36px;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-item:focus,
.project-item:hover,
.project-item:active {
  color: var(--text-primary-dark-color);
}

.project-item:focus .project-item__background,
.project-item:hover .project-item__background,
.project-item:active .project-item__background {
  transform: scale(1.075, 1);
  transform-origin: center top;
}

@media (max-width: 620px) {
  .project-item {
    height: 72px;
  }

  .project-item__date {
    font-size: 14px;
    line-height: 30px;
    margin-right: 16px;
  }

  .project-item__title {
    font-size: 16px;
    line-height: 32px;
  }
}
</style>
