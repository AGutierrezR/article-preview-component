import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import './css/styles.css'
import Alpine from 'alpinejs'

window.tippy = tippy

Alpine.data('tooltip', () => ({
  isOpen: false,

  trigger: {
    ['@click']() {
      this.isOpen = !this.isOpen
    }
  }, 
  close() {
    this.isOpen = false
  }

}))

window.Alpine = Alpine

Alpine.start()
