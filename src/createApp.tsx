import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vue, { Component as VueComponent } from 'vue'

import ReactApp from './App'
import VueApp from './App.vue'

export default function (
  ReactElement: React.ElementType,
  VueElement: VueComponent
) {
  ReactDOM.render(
    <React.StrictMode>
      <ReactApp>
        <ReactElement />
      </ReactApp>
    </React.StrictMode>,
    document.getElementById('react-app')
  )

  new Vue({
    el: '#vue-app',
    render: (h) => h(VueApp, [h(VueElement)])
  })
}
