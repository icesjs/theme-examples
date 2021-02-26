import * as React from 'react'
import classNames from 'classnames/bind'

import './index.sass'
import style from './index.module.sass'

const cls = classNames.bind(style)

function ReactSassButton() {
  return (
    <div className={cls('buttonWrapper')}>
      <button className={cls('button-global-sass-react', 'button')}>
        ReactSassButton
      </button>
    </div>
  )
}

export default ReactSassButton
