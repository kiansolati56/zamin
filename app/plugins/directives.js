import {
    defineNuxtPlugin
} from '#app'
import PersianNumbers from '~/directives/persian-numbers'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('auto-persian-number', PersianNumbers)
})