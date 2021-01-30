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
      v-show="showErrorMessage"
    >
      <div
        class="max-w-sm w-full mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <ul class="block sm:inline">
          <li v-for="(item, index) in error" :key="index">{{ item }}</li>
        </ul>
        <button
          @click="showErrorMessage = false"
          class="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          <svg
            class="fill-current h-6 w-6 text-red-500"
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
import { formatErrorMessages } from "@/utils/utils.js";
export default {
  name: "ErrorMessage",
  computed: {
    showErrorMessage: {
      get() {
        return this.$store.state.error.showErrorMessage;
      },
      set(value) {
        this.$store.commit(types.SHOW_ERROR, value);
      }
    },
    error() {
      return formatErrorMessages(
        "errors",
        this.$store.state.error.errorMessage
      );
    }
  },
  watch: {
    error() {
      setTimeout(value => {
        this.showErrorMessage = value;
      }, 8000);
    }
  }
};
</script>
