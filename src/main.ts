import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusCircle,
  faTrashCan,
  faArrowRight,
  faArrowLeft,
  faExclamationCircle,
  faUndo,
  faQuestion,
  faRecycle,
  faMagic,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(
  faPlusCircle,
  faTrashCan,
  faArrowRight,
  faArrowLeft,
  faExclamationCircle,
  faUndo,
  faQuestion,
  faRecycle,
  faMagic,
)

const app = createApp(App)
app.component('SetupItem')
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })
// see https://primevue.org/theming/styled/ for changing the colour scheme of PrimeVue components

app.mount('#app')
