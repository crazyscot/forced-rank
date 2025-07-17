import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faPlusCircle, faTrashCan)

const app = createApp(App)
app.component('SetupItem')
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
