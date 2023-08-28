import Tabbar27 from './2023/08/27-Tabbar/index.vue'
import Tabbar28 from './2023/08/28-Tabbar/index.vue'

import type { App, Component } from 'vue'

const components: { [name: string]: Component } = { Tabbar27, Tabbar28 }

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
