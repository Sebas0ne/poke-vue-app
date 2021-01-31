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
    path: "/game",
    name: "game",
    component: page("Game.vue")
  },
  {
    path: "/pokedex",
    name: "pokedex",
    component: page("PokedexView.vue")
  },
  {
    path: "/*",
    name: "*",
    component: page("Pagenotfound.vue")
  }
];
