import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// createApp(App).use(store).use(VueAxios, axios).use(VueSweetalert2).use(router).mount('#app')

const app = createApp(App);

app.use(VueSweetalert2);
app.use(store);
app.use(VueAxios, axios);
app.use(router)
app.mount('#app');