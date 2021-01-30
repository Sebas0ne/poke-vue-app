export default async (to, from, next) => {
  if (localStorage.getItem("user")) {
    return next({ name: "profile" });
  }
  next();
};
