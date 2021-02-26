import * as React from 'react'
import classNames from 'classnames/bind'

import './index.less'
import style from './index.module.less'

const cls = classNames.bind(style)

function ReactLessButton() {
  return (
    <div className={cls('buttonWrapper')}>
      <button className={cls('button-global-less-react', 'button')}>
        ReactLessButton
      </button>
    </div>
  )
}

export default ReactLessButton
