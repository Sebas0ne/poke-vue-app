function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `@/pages/${path}`).then(
      m => m.default || m
    );
}
export default [
  {
    path: "/",
    name: "home",
    component: page("Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: page("About.vue")
  },
  {
    path: "/*",
    name: "*",
    component: page("Pagenotfound.vue")
  }
];
