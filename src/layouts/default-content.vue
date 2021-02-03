<template>
  <div>
    <Navbar />
    <main class="pb-2" id="main-p">
      <transition name="page" mode="out-in">
        <router-view class="lg:pt-4" />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "default-content"
};
</script>

<style scoped>
#main-p {
  margin-top: 60px;
}
</style>
