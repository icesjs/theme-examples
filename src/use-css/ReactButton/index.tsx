import * as React from 'react'
import classNames from 'classnames/bind'

import './index.css'
import style from './index.module.css'

const cls = classNames.bind(style)

function ReactCssButton() {
  return (
    <div className={cls('buttonWrapper')}>
      <button className={cls('button-global-css-react', 'button')}>
        ReactCssButton
      </button>
    </div>
  )
}

export default ReactCssButton
