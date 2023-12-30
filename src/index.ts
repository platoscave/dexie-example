// Entry point for the plugin system
//import type { App } from "vue";
import JsonschemaForm from "./components/JsonschemaForm.vue";
import JsonschemaTable from "./components/JsonschemaTable.vue";

// Install hook. Allows us to do global import in main.ts
// e.g. app.use(ViewerPlugin);
// export default {
//     install: (app: App) => {
//         app.component("JsonschemaForm", JsonschemaForm);
//     },
// };

// Accommodate import, as opposed to use globally
export { JsonschemaForm, JsonschemaTable };