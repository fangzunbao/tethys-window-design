import Tabbar27 from './2023/08/27-Tabbar/index.vue'
import Tabbar28 from './2023/08/28-Tabbar/index.vue'
import Tabbar29 from './2023/08/29-Tabbar/index.vue'
import Navbar30 from './2023/08/30-Navbar/index.vue'
import Navbar01 from './2023/09/01-Navbar/index.vue'
import Button06 from './2023/09/06-Button/index.vue'

import type { App, Component } from 'vue'

const components: { [name: string]: Component } = {
  Tabbar27,
  Tabbar28,
  Tabbar29,
  Navbar30,
  Navbar01,
  Button06,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
