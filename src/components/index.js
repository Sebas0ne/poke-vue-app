// estos componentes no va a ser necesario importarlos en otros lado con el simple hecho de poner la etiqueta lo llamas
import Vue from "vue";
import Navbar from "@/components/common/Navbar.vue";
import H5Title from "@/components/common/H5Title";
import InnerLine from "@/components/common/InnerLine";

Vue.component("Navbar", Navbar);
Vue.component("H5Title", H5Title);
Vue.component("InnerLine", InnerLine);
