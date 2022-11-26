/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './assets/main.css'

/* add icons to the library */
library.add(faEnvelope, faLinkedin, faGithub)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

