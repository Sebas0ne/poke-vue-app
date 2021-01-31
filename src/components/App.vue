<template>
  <v-app id="app">
    <loading ref="loading" />
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </v-app>
</template>

<script>
import Loading from "./partials/Loading";
import { mapGetters } from "vuex";
// Load layout components dynamically.
const requireContext = require.context("../layouts", false, /.*\.vue$/);
const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});

export default {
  name: "App",
  el: "#app",
  components: {
    Loading
  },
  data: () => ({
    layout: null,
    defaultLayout: "default-content"
  }),
  metaInfo() {
    return {
      title: this.appTitle,
      titleTemplate: `%s · ${this.appTitle}`,
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  },
  computed: {
    ...mapGetters(["appTitle"])
  },
  mounted() {
    this.$loading = this.$refs.loading;
  },
  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }
      this.layout = layouts[layout];
    }
  },
  provide() {
    return {
      $colorMode: {
        preference: "light" // disable system
      }
    };
  }
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}

.layout-enter,
.layout-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
