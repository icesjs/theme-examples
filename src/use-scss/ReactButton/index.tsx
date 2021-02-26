import * as React from 'react'
import classNames from 'classnames/bind'

import './index.scss'
import style from './index.module.scss'

const cls = classNames.bind(style)

function ReactScssButton() {
  return (
    <div className={cls('buttonWrapper')}>
      <button className={cls('button-global-scss-react', 'button')}>
        ReactScssButton
      </button>
    </div>
  )
}

export default ReactScssButton
