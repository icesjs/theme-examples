import * as React from 'react'
import classNames from 'classnames/bind'

import './index.scss'
import style from './index.module.scss'

const cls = classNames.bind(style)

function ReactScssButton() {
  return (
    <button className={cls('button-global-scss', 'button')}>
      ReactScssButton
    </button>
  )
}

export default ReactScssButton
