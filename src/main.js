import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import './css/styles.css'
import Alpine from 'alpinejs'

window.tippy = tippy

Alpine.data('tooltip', () => ({
  isOpen: false,
  instance: null,

  open(ev) {
    this.isOpen = true

    this.instance = tippy(ev.target, {
      content: this.$refs.content.cloneNode(true).innerHTML,
      trigger: 'manual',
      allowHTML: true,
      interactive: true,
      offset: [0 , 20],
      theme: 'article-tooltip',
      popperOptions: {
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              boundary: document.body,
            },
          },
        ],
      },
    })

    this.instance.show()
  },

  close() {
    this.isOpen = false
    this.instance && this.instance.destroy()
  },
}))

window.Alpine = Alpine

Alpine.start()
