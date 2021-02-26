import createApp from '../createApp'
import ReactButton from './ReactButton'
import VueButton from './VueButton/index.vue'

// sass can not parse css syntax
import 'normalize.css'
import './index.sass'

createApp(ReactButton, VueButton)
