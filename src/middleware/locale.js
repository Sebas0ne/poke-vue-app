import store from "@/store";

export default async (to, from, next) => {
  await store.dispatch("setLocale", store.getters.locale);
  next();
};
