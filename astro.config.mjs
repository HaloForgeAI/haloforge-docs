import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.haloforge.link",
  integrations: [
    starlight({
      title: "HaloForge Docs",
      description: "Developer documentation for HaloForge plugins, SDKs, publishing, and platform integration.",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        zh: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [
        {
          icon: "github",
          label: "HaloForgeAI on GitHub",
          href: "https://github.com/HaloForgeAI",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/HaloForgeAI/haloforge-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Start",
          translations: { zh: "开始" },
          items: [
            { label: "Overview", link: "/" },
            { label: "Command Line", link: "/platform/cli/" },
            { label: "Repository Map", link: "/platform/repositories/" },
          ],
        },
        {
          label: "Plugin Development",
          translations: { zh: "插件开发" },
          items: [{ autogenerate: { directory: "plugins" } }],
        },
        {
          label: "SDK & API",
          translations: { zh: "SDK 与 API" },
          items: [{ autogenerate: { directory: "sdk" } }],
        },
        {
          label: "Publishing",
          translations: { zh: "发布" },
          items: [{ autogenerate: { directory: "publishing" } }],
        },
      ],
      customCss: ["./src/styles/haloforge.css"],
    }),
  ],
});
