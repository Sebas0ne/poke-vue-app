import store from "@/store";

export default async (to, from, next) => {
  if (!localStorage.getItem("user")) {
    return next({ name: "login" });
  }
  await store.dispatch("autoLogin");
  next();
};
