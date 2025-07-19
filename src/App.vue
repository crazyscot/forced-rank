<script setup lang="ts">
import { RouterView } from 'vue-router'
import { state, options } from '@/state.ts'
import ToggleSwitch from 'primevue/toggleswitch'
</script>

<template>
  <div class="logo">
    <div>
      <img
        class="logo"
        alt="Forced Ranker logo"
        src="@/assets/logo.svg"
        @click="++state.logo_clicks"
      />
      <div v-if="state.logo_clicks > 4">
        debug
        <ToggleSwitch v-model="options.debug_mode" />
      </div>
    </div>
  </div>
  <main>
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

div.logo {
  display: block;
  margin: 0 auto 2rem;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1;
}
img.logo {
  width: 6vw;
  height: 6vw;
  padding: 5px 5px 0 0;
  margin-left: auto;
  float: right;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  img.logo {
    width: 130px;
    height: 130px;
    padding: 10px 10px 0 0;
  }
}
</style>
