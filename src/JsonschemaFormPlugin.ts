// Entry point for the plugin system
import type { App } from "vue";
import JsonschemaForm from "./components/JsonschemaForm.vue";

// Install hook. Allows us to do global import in main.ts
// e.g. app.use(ViewerPlugin);
export default {
    //@ts-expect-error
    install: (app: App, options: {}) => {
        app.component("JsonschemaForm", JsonschemaForm);
    },
};

// Accommodate import, as opposed to use globally
// export { JsonschemaForm };