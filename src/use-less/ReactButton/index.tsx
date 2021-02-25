import * as React from 'react'
import classNames from 'classnames/bind'

import './index.less'
import style from './index.module.less'

const cls = classNames.bind(style)

function ReactLessButton() {
  return (
    <button className={cls('button-global-less', 'button')}>
      ReactLessButton
    </button>
  )
}

export default ReactLessButton
