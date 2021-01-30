<template>
  <div>
    <main class="pb-2" id="main-p">
      <transition name="page" mode="out-in">
        <router-view class="lg:pt-4" />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "card-content"
};
</script>

<style scoped>
#main-p {
  background-color: #0000;
}
</style>
