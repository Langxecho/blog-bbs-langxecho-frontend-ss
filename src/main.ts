/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import "virtual:windi.css";
// Plugins
import { registerPlugins } from "@/plugins";
// import "//at.alicdn.com/t/c/font_4818041_f3c734teffb.css";
import "@/assets/iconfont.css";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
