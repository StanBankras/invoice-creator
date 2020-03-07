<template>
  <div class="content-container">
    <div class="content-wrapper">
      <div id="input-area">ok</div>
      <invoice></invoice>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Invoice from '@/components/Invoice.vue';

export default {
  name: 'Home',
  components: {
    Invoice
  }
};
</script>

<style>
.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

#invoice {
  margin-left: auto;
}
</style>
