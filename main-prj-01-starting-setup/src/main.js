import { createApp } from 'vue';

import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

const app = createApp(App);

app.component("BaseCard", BaseCard);
app.component("BaseBadge", BaseBadge);
app.component("BaseButton", BaseButton);
app.component("BaseSpinner", BaseSpinner);

app.use(router);
app.use(store);

app.mount('#app');