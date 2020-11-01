<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../src/components/Header';
import appFooter from '../src/components/Footer';
// https://air-traffic.netlify.app/static/flight.png
export default {
  name: 'App',
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  },
  metaInfo() {
    return {
      meta: [
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Air Traffic' },
        { name: 'twitter:keywords', content: 'air, traffic, tracking, flights, airplane, real, time' },
        { name: 'twitter:description', content: 'Air traffic, real time tracker' },
        { name: 'twitter:image', content: process.env.NODE_ENV === 'production' ? 'https://air-traffic.netlify.app/static/flight.png' : '' },
        // Facebook OpenGraph
        { property: 'og:title', content: 'Air Traffic' },
        { property: 'og:site_name', content: 'Vue Example' },
        { property: 'og:type', content: 'website' },
        { property: 'og:keywords', content: 'air, traffic, tracking, flights, airplane, real, time' },
        { property: 'og:image', content: process.env.NODE_ENV === 's' ? 'https://air-traffic.netlify.app/static/flight.png' : '' },
        { property: 'og:description', content: 'Air traffic, real time tracker' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../src/assets/styles/reset';
@import '../src/assets/styles/default';

#app {
}
</style>
