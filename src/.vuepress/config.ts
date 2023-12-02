import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Vichayturen开发",
  description: "Vichayturen的开发梦",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
