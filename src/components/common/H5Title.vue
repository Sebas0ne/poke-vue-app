<template>
  <h5 id="h5-tittle">{{ title }}</h5>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
#h5-tittle {
  font-size: 2em;
  color: #7a7a7a;
}
</style>
