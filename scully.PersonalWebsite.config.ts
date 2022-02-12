import { ScullyConfig } from "@scullyio/scully";

/** this loads the default render plugin, remove when switching to something else. */
import "@scullyio/scully-plugin-puppeteer";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "PersonalWebsite",
  // add spsModulePath when using de Scully Platform Server,
  outDir: "./dist/static",
  routes: {
    "/blog/:blogId": {
      type: "contentFolder",
      blogId: {
        folder: "./src/assets/blog-posts",
      },
    },
  },
};
