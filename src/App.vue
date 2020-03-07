<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    'header-bar': Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-container {
  max-width: 90%;
  margin: 0 auto;
}
</style>
