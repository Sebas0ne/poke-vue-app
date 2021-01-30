<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100 translate-y-0 sm:scale-100"
    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  >
    <div
      class="z-50 fixed bottom-0 inset-x-0 px-4 pb-4"
      v-show="showSuccessMessage"
    >
      <div
        class="max-w-sm w-full mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        {{ successMessage }}
        <button
          class="absolute top-0 bottom-0 right-0 px-4 py-3"
          @click="showSuccessMessage = false"
        >
          <svg
            class="fill-current h-6 w-6 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>{{ $t("common.CLOSE") }}</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import * as types from "@/store/mutation-types";
export default {
  name: "SuccessMessage",
  computed: {
    showSuccessMessage: {
      get() {
        return this.$store.state.success.showSuccessMessage;
      },
      set(value) {
        this.$store.commit(types.SHOW_SUCCESS, value);
      }
    },
    successMessage() {
      if (this.$store.state.success.successMessageParams) {
        return this.$i18n.t(this.$store.state.success.successMessage, [
          ...this.$store.state.success.successMessageParams
        ]);
      }
      return this.$i18n.t(this.$store.state.success.successMessage);
    },
    successMessageTimeout() {
      return this.$store.state.success.successMessageTimeout;
    }
  },
  watch: {
    successMessage() {
      const out = this.successMessageTimeout;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, out);
    }
  }
};
</script>
